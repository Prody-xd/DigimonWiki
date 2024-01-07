// funcion mostrar Digimon en pantalla
let url = 'https://digimon-api.vercel.app/api/digimon'
fetch(url)
  .then(response => response.json())
  .then(data => mostrarDatos(data))
  .catch(error => console.log(error))

const mostrarDatos = (data) =>{
  console.log(data)
  let body = ''
  for (let i = 0; i<data.length; i++){
    body += `
      <tr>
        <td><a href="https://digimon-api.vercel.app/api/digimon/name/${data[i].name}">${data[i].name}</a></td>
        <td>${data[i].img}</td>
        <td>${data[i].level}</td>
      </tr>`
    leng = `<a>${data.length}</a>`
    lenglevel = `<a>${data.level}</a>`

  }
  document.getElementById('data').innerHTML = body
  document.getElementById('leng').innerHTML = leng
  // document.getElementsByName('level').innerHTML = lenglevel


}



let busqueda = document.getElementById("buscarDigimon")

function filterItems(name) {
    const busqueda = document.getElementById("buscarDigimon");
    const card = document.getElementById("cardResultado");
    const nameElement = document.getElementById("name");
    const levelElement = document.getElementById("level");
    const imgElement = document.getElementById("img");
  
    let timeoutId;
  
    busqueda.addEventListener("keyup", () => {
      clearTimeout(timeoutId);
  
      timeoutId = setTimeout(() => {
        fetch(`https://digimon-api.vercel.app/api/digimon/name/${busqueda.value}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            if (data.length > 0) {
              card.classList.remove("d-none");
              card.classList.add("d-block");
  
              nameElement.innerText = data[0].name;
              levelElement.innerText = data[0].level;
              imgElement.setAttribute("src", data[0].img);
              
              [nameElement, levelElement].forEach(element => {
                element.setAttribute("style", "text-align: center; color: black;");
              });
              
              imgElement.setAttribute("style", "max-width: 150px; max-height: 150px; margin: auto; display: block;");
              
              console.log(data);
            } else {
              card.classList.add("d-none");
            }
          })
          .catch(error => {
            console.error("Error during fetch:", error);
          });
      }, 500); // Espera 500 milisegundos después de la última pulsación de tecla
    });
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    filterItems(document.getElementById("buscarDigimon"));
  });
  
  
  