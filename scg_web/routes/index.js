var express = require('express');
var router = express.Router();
var config = require('../config/config.json')[process.env.NODE_ENV || "development"];

var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  var today = moment().format("YYYY-MM-DD");
  var now = moment().format("YYYY-MM-DD HH:mm:ss");
  res.render('index', { title: 'Express' });
});

router.get('/timeline', function(req, res, next) {
    res.render('timeline', { title: 'Express' });
});

router.get('/set', function(req, res, next) {
  res.render('set', { title: 'Express' });
});

module.exports = router;
