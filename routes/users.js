var express = require('express');
var router = express.Router();

var service = require('../services/userService');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//RegisterToAppAPI
router.post('/register',function(req, res, next){
  var obj={
    "name":req.body.name,
    "email":req.body.email,
    "mobile":req.body.mobile,
    "college":req.body.college,
    "password":req.body.password
  }
  service.registerToApp(obj,res);
})

//LoginToApp
router.post('/login',function(req,res,next){
    if(req.body.email=="admin@zest.com" && req.body.password=="miracle"){
      res.json("admin loggedin");
    }
    else{
      var obj={
        "email":req.body.email,
        "password":req.body.password
      }
      service.loginToApp(obj,res);
    }
});

//forgotPassword
router.post('/forgot',function(req,res,next){
  var obj = {
    "email":req.body.email,
    "password":req.body.password
  }
  service.resetPassword(obj,res);
})

//EventRegister
router.post('/eventregister',function(req, res, next){
  //here email should be obtained from session
  var obj={
    "branch":req.body.branch,
    "events":req.body.events
  }
  service.registerEvent(obj,res);
});


//TeamRegister
router.post('/teamregister',function(req,res,next){
  //here name should be obtained from session
  var obj={
    "teamname":req.body.teamname,
    "teamevent":req.body.teamevent,
    "teameventbranch":req.body.teameventbranch,
    "teammember1name":req.body.teammember1name,
    "teammember1email":req.body.teammember1email,
    "teammember1mobile":req.body.teammember1mobile,
    "teammember1college":req.body.teammember1college,
    "teammember2name":req.body.teammember2name,
    "teammember2email":req.body.teammember2email,
    "teammember2mobile":req.body.teammember2mobile,
    "teammember2college":req.body.teammember2college,
    "teammember3name":req.body.teammember3name,
    "teammember3email":req.body.teammember3email,
    "teammember3mobile":req.body.teammember3mobile,
    "teammember3college":req.body.teammember3college
  }
  service.teamRegister(obj,res);
});

//profile
router.get('/profile',function(req,res,next){
  service.retrieveUserData(req,res);
})

//updateProfile
router.post('/updateprofile',function(req,res,next){
  var obj = {
    mobile:req.body.mobile
  }
  service.updateProfile(obj,res);
})

//LogoutFromApp
router.get('/logout',function(req,res,next){
  service.logoutFromApp(req,res);
});

//check session for side menubar
router.get('/checksession',function(req,res,next){
  service.checkforsidemenu(req,res);
});

module.exports = router;