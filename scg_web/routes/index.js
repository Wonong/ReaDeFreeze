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
    models.Post.create(req.body).then(function(Post){});
})

// 계정의 냉장고 연결 여부 확인을 위함
router.get('/link/:userId', function(req, res){
    models.User.findOne(
        { where : {userId : req.params.userId}}
    ).then(function(data){
        console.log("datadata");
        console.log(data.dataValues);
        res.send(data.dataValues);
    })
})

3
module.exports = router;
