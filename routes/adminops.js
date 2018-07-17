var express = require('express');
var router = express.Router();
var adminservice = require('../services/adminService');

router.post('/viewevent', function(req, res, next) {
    var obj = {
        "branchname":req.body.branchname,
        "eventname":req.body.eventname
    }
    adminservice.viewEvent(obj,res);
});

router.post('/updateevent', function(req, res, next) {
  var obj = {
      "branchname":req.body.branchname,
      "eventname":req.body.eventname,
      "description":req.body.description,
      "time":req.body.time,
      "venue":req.body.venue,
      "RegistrationFee":req.body.RegistrationFee,
      "Organizers":req.body.Organizers,
      "Organizersnumber":req.body.Organizersnumber,
      "Organizersmail":req.body.Organizersmail,
      "teamsize":req.body.teamsize
  }
  adminservice.updateEvent(obj,res);
});

router.post('/viewregistrations', function(req, res, next) {
    var obj = {
        "eventname":req.body.eventname
    }
    adminservice.getUserDetails(obj,res);
});

module.exports = router;
