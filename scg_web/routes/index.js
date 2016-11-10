var express = require('express');
var router = express.Router();
var config = require('../config/config.json')[process.env.NODE_ENV || "development"];

var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout', { title: 'Express' });
});

// router.get('/timeline', function(req, res, next) {
//     res.render('timeline', { title: 'Express' });
// });
//
// router.get('/timeline2', function(req, res, next) {
//     res.render('timeline2', { title: 'Express' });
// });
//
// router.get('/update', function(req, res, next) {
//     res.render('update', { title: 'Express' });
// });
//
// router.get('/link', function(req, res, next) {
//     res.render('link', { title: 'Express' });
// });
//
// router.get('/set', function(req, res, next) {
//   res.render('set', { title: 'Express' });
// });

module.exports = router;
