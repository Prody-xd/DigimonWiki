var express = require('express');
var router = express.Router();
const API_URL = 'https://digimon-api.vercel.app/api/digimon';


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Digimon Wiki' });
});

module.exports = router;
