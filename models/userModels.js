var mongoose = require('mongoose');

var User = mongoose.model('users', {
  name: String,
  email: String,
  mobile: Number,
  college: String,
  password: String,
  events: Array,
  team:Array
});

var Events = mongoose.model('events', {
  branchname:String,
  eventname:String,
  description:String,
  time:String,
  venue:String,
  RegistrationFee:String,
  Organizers:String,
  Organizersnumber:String,
  Organizersmail:String,
  teamsize:String
});

module.exports.User=User;
module.exports.Events=Events;
