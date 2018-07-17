var DBModel=require('../models/userModels');
var Events = DBModel.Events;

//eventRetrieve
var eventRetrieve = function(obj,res){
    Events.find({branchname:obj.branchname,eventname:obj.eventname},function(err,data){
        if (err)
                res.json(err)
            res.json(data);
    })
}

module.exports.eventRetrieve = eventRetrieve;