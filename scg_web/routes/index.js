var express = require('express');
var router = express.Router();
var config = require('../config/config.json')[process.env.NODE_ENV || "development"];
var models = require('../models');
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout', { title: 'Express' });
});

router.post('/updateInfo', function (req, res, next) {
    console.log(req.body);
    models.Post.create(req.body).then(function(Post){});
})

router.post('/user_data/', function(req, res, next){
    console.log(req);
    models.userData.create(req.body).then(function(userData){});
    res.render({"message" : success});
});
module.exports = router;
