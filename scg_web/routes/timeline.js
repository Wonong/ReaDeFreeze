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
                user: timelineSv.user,
                toTime: moment(timelineSv.toTime).format("YYYY-MM-DD"),
                mode: timelineSv.mode,
                device: timelineSv.device,
                updatedAt : timelineSv.updatedAt,
                createdAt : timelineSv.createdAt
            };
            timelineCliArr.push(timelineCli);
        });

        res.contentType('application/json');
        res.send(timelineCliArr);
    });
});

module.exports = router;