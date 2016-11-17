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

// List
router.get('/list/?*', function(req, res) {
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
        if(timelineCli.mode == 1)   timelineCli.mode = "Meat & Fish";
        else timelineCli.mode = "Cheese & Vegetables";
        timelineCliArr.push(timelineCli);
        });

        res.contentType('application/json');
        res.send(timelineCliArr);
    });
});

//최근 기록 updated시간이랑 tizenId 보내면 그 시간부터 현재까지에 해당하는 모든 로그 보내기.
router.get('/time_list/?*', function(req, res){
    userId = models.User.findOne({
        where : {
            tizenId : req.query.tizenId
        }
    });
    models.Post.findAll({
        order : "id DESC",
        where : {
            updatedAt : {$gt : req.query.updatedAt}
        }
    }).then(function(timelineArr){
        console.log("timelineArr");
        console.log(timelineArr);
        res.send(timelineArr);
    })
})

module.exports = router;