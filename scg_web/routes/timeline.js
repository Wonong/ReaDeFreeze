var express = require('express');
var router = express.Router();
var models = require('../models');
var session = require('express-session');
var fs = require('fs');
var mkdirp = require('mkdirp');
var path = require('path');
var multer = require('multer');
var config = require('../config/config.json')[process.env.NODE_ENV || "development"];
var moment = require('moment');
var async = require('async');

// 특정 계정의 로그만을 뽑는다
router.get('/list/:id', function(req, res) {
    models.Post.findAll({
        order : 'id DESC',
        where : {
            userId : req.params.id
        }
    }).then(function(timelineSvArr) {
        var timelineCliArr = [];
        timelineSvArr.forEach(function(timelineSv) {
            var timelineCli = {
                id: timelineSv.id,
                userId: timelineSv.userId,
                toTime: moment(timelineSv.toTime).format("hh:mm"),
                mode: timelineSv.mode,
                device: timelineSv.device,
                updatedAt : moment(timelineSv.updatedAt).format("YYYY-MM-DD"),
                createdAt : timelineSv.createdAt
            };
            if(timelineCli.mode == 1)   timelineCli.mode = "Meat & Fish";
            else timelineCli.mode = "Cheese & Vegetables";
            timelineCliArr.push(timelineCli);
        });

        res.contentType('application/json');
        res.send(timelineCliArr);
    });
});

// List
router.get('/list2/?*', function(req, res) {
    models.Post.findAll({
        order : 'id DESC'
    }).then(function(timelineSvArr) {
        var timelineCliArr = [];
        timelineSvArr.forEach(function(timelineSv) {
            var timelineCli = {
                id: timelineSv.id,
                userId: timelineSv.userId,
                toTime: moment(timelineSv.toTime).format("hh:mm"),
                mode: timelineSv.mode,
                device: timelineSv.device,
                updatedAt : moment(timelineSv.updatedAt).format("YYYY-MM-DD"),
                createdAt : timelineSv.createdAt
        };
        timelineCliArr.push(timelineCli);
        });

        res.contentType('application/json');
        res.send(timelineCliArr);
    });
});

//최근 기록 updated시간이랑 tizenId 보내면 그 시간부터 현재까지에 해당하는 모든 로그 보내기.
router.get('/time_list/?*', function(req, res){
    if(req.query.tizenId == 'vXKD7YPKcKbZu0gucsiuUrSOjAA=') console.log("good");

    models.User.findOne({
        where : {
            tizenId : req.query.tizenId
        }
    }).then(function(data){
        if(data){
            var userId = data.userId;
            models.Post.findAll({
                order : "id DESC",
                where : {
                    updatedAt : {$gt : req.query.updatedAt},
                    userId : userId
                }
            }).then(function(timelineArr){
                console.log(timelineArr);
                res.send(timelineArr);
            });
        }else{
            res.send({});
        }

    });
})

//냉장고 설절변경기록 서버에 추기ㅏ
router.post('/update/',function(res, req){
   userId = models.User.findOne({
       where : {
           tizenId : req.body.tizenId
       }
   });
    models.Post.create({
        mode : req.body.mode,
        toTime : req.body.toTime,
        device : 'Refrigerator',
        userId : userId
    }).then(function(Post){});
});

module.exports = router;