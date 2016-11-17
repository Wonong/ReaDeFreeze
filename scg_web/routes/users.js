var express = require('express');
var sha256 = require('sha256');
var router = express.Router();
var models = require('../models');
var session = require('express-session');

function loadUser(req,res,next) {
  console.log(req.session.user);
  if( req.session.user ){
    next();
  }
  else
    res.redirect('/');
}

//냉장고에서 ID로 자신 등록
router.post('/register/', function(req, res, next){
    console.log(req.body);
    var userId = models.User.findOne({
        where : {
            userId : req.body.userId
        }
    });
    if(userId == null) {
        console.log("null")
        res.render({"message" : "There is no ID like" +  req.body.userId});
    }else{
        console.log("not null");
        models.User.update(
            {tizenId : req.body.tizenId},
            {where : {userId : req.body.userId}}
        );
        res.render({"message" : success});
    }

});

// 로그인
router.post('/login', function(req, res, next) {
  models.User.findOne({   // 유저 검색
    where: {
      userId: req.body.userId,
      password: sha256(req.body.password)
    }
  }).then(function(user) {
    if (user !== null) {
      req.session.user = user.dataValues; // 세션 추가 등록
      req.session.user.time = new Date();
      req.session.user.ip = req.connection.remoteAddress;
      delete req.session.user.password;
      res.send(req.session.user);
    } else {
      console.log("login Failed");
      res.send({
        result: false
      });
    }
  });
});

// 로그아웃
router.get('/logout', function(req, res, next) {
  req.session.user = {};
  delete req.session.user;
  res.send({
    error: false
  });
});

router.get('/getSession', function(req, res, next) {
    console.log("getSession");
    console.log(req.session);
    res.send(req.session.user);
});

// Create
router.post('/', function(req, res) {
  models.User.findOne({
    where: {
      userId: req.body.userId
    }
  }).then(function(user){
    if (user === null) {
      req.body.password = sha256(req.body.password);
      models.User.create(req.body).then(function(user) {
        /*생성 완료 후 바로 세션 등록*/
        if (user !== null) {
            console.log(user.dataValues);
          req.session.user = user.dataValues;
          req.session.user.time = new Date();
          req.session.user.ip = req.connection.remoteAddress;
          delete req.session.user.password;
          res.send(req.session.user);
        }
      }).catch( function ( error ) {
        res.send({ emailConflict: true });
      });
    } else {
      res.send({ idConflict: true });
    }
  });
});


//없애자
// Read
router.get('/:id', function(req, res) {
  models.User.findOne({
    where: {
      user_id: req.params.id
    }
  }).then(function(user) {
    if (user !== null) {
      var userCli ={};
      userCli.id = user.id;
      userCli.userId = user.userId;
      userCli.createdAt = user.createdAt;
      userCli.updatedAt = user.updatedAt;

      res.contentType('application/json');
      res.send(userCli);
    } else {
      res.send({
        error: true
      });
    }
  });
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('layout2', { title: 'Express' });
});


module.exports = router;
