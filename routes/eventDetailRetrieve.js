var express = require('express');
var router = express.Router();

var eventservice = require('../services/eventService');

router.post('/retrieve',function(req,res,next){
  var obj={
    "branchname":req.body.branchname,
    "eventname":req.body.eventname
  }  
  eventservice.eventRetrieve(obj,res);
});


module.exports = router;