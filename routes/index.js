var express = require('express');
var router = express.Router();
var sum = require('../controller/number');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hojin' });
});

router.get('/to', function(req, res, next) {
  res.json({"to":sum(req.query.num)});
});

module.exports = router;
