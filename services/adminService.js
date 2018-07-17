var DBModel=require('../models/userModels');
var User = DBModel.User;
var Events = DBModel.Events;

//viewEvent
var viewEvent = function(obj,res){
    
    Events.find({branchname:obj.branchname,eventname:obj.eventname},function(err,data){
        if (err)
                res.json(err)
            res.json(data);
    })
}

//update Event Detail
var updateEvent = function(obj,res){
    Events.update({branchname:obj.branchname,eventname:obj.eventname},{$set:{description:obj.description,time:obj.time,venue:obj.venue,RegistrationFee:obj.RegistrationFee,Organizers:obj.Organizers,Organizersnumber:obj.Organizersnumber,Organizersmail:obj.Organizersmail,teamsize:obj.teamsize}},function(err,data){
        if (err)
            res.json(err)
        res.json("Updated Successfully");
    })
}

//getUserDetails
var getUserDetails = function(obj,res){
    User.find({"events.events":obj.eventname},function(err,data){
        if (err)
                res.json(err)
            res.json(data);
    })
}


module.exports.viewEvent = viewEvent;
module.exports.updateEvent = updateEvent;
module.exports.getUserDetails = getUserDetails;