var DBModel=require('../models/userModels');
var User=DBModel.User;

//session
var session = require('express-session');
var sess; 

//secure password
var bcrypt = require('bcryptjs');
var saltRounds=10;

//mail
var nodemailer = require('nodemailer');

//Insert User data in the database
var registerToApp=function(obj,res){
    
    //Initializing DB Model Schema and assigning values to that schema 
    var user = new User();
    
    //check for user Exsistence
    User.find({email:obj.email},function(err,data){
        if(data.length>0){
            //console.log('user already exists');
            res.json('user already exists');
        }
        else{
            bcrypt.hash(obj.password, saltRounds, function(err,hash){
                if(hash)
                    var pswd=hash;
            
                    user.name=obj.name;
                    user.email=obj.email;
                    user.mobile=obj.mobile;
                    user.college=obj.college;
                    user.password=pswd;
        
                    // Insert the Data 
                    user.save(user,function(error,userdata) {
                    if (error){
                    //console.log('Error in Registering user data: '+err);  
                    throw err;  
                    res.json('failed');
                    }
        
        
                    var transporter = nodemailer.createTransport({
                        service: 'gmail',
                        secure:false,
                        port:25,
                        auth: {
                          user: 'zestmiracle@gmail.com',
                          pass: 'AABEHNPSV'
                        },
                        tls:{
                            rejectUnauthorized: false
                        }
                      });
                                  
                      var mailOptions = {
                        from: 'zestmiracle@gmail.com',
                        to: obj.email,
                        subject: 'Zest Registration',
                        html: 'Congratulations '+'<b>'+obj.name+'</b>'+' you have registered to Zest app succesfully, now you can register for the events by logging in to the app with your credentials.'+'<br>'+'Email: '+obj.email+'<br>'+'Password: '+obj.password
                      };
                      
                      transporter.sendMail(mailOptions, function(error, info){
                        if (error) {
                          //console.log(error);
                        } else {
                          //console.log('Email sent: ' + info.response);
                        }
                      });
        
        
                    //console.log('User Registration successfull');    
                    res.json('User Registration successfull');
                    });
            });
            
        }
    });  
 }
 
//resetPassword
var resetPassword = function(obj,res){
    User.find({email:obj.email},function(err,data){
        if(data.length>0){
            bcrypt.hash(obj.password, saltRounds, function(err,hash){
                if(hash)
                    var newpswd=hash;
                User.update({email:obj.email},{$set:{password:newpswd}},function(err,data){
                    if(err)
                        throw err;
                
                    var transporter = nodemailer.createTransport({
                        service: 'gmail',
                        secure:false,
                        port:25,
                        auth: {
                            user: 'zestmiracle@gmail.com',
                            pass: 'AABEHNPSV'
                        },
                        tls:{
                            rejectUnauthorized: false
                        }
                        });
                      
                      var mailOptions = {
                        from: 'zestmiracle@gmail.com',
                        to: obj.email,
                        subject: 'Password reset',
                        html:'Your password is successfully updated.'+'<br>'+'Email: '+obj.email+'<br>'+'Password: '+obj.password
                      };
                      
                      transporter.sendMail(mailOptions, function(error, info){
                        if (error) {
                          //console.log(error);
                        } else {
                          //console.log('Email sent: ' + info.response);
                        }
                      });
                
                res.json("Password updated")
            })
        });

        }
        else{
            res.json("email not found")
        }
    })
    
}

//LoginToApp
var loginToApp=function(obj,res){
    var email=obj.email;
    var password=obj.password;
    //console.log(email);
    //console.log(password);
    User.find({"email":email},function(err,data){
        if(err){
            //console.log('invalid credentials'+err);
            throw err;
            res.json('invalid credentials');
        }
        else{
            if(data.length>0)
            {
                bcrypt.compare(password,data[0].password,function(err,decrypt){
                    if(decrypt==true){
                        //creating session
                        session.email = obj.email;
                        //console.log('user loggedin');
                        res.json("Login Successful...");
                    }
                    else{
                        //console.log('user logging in failed');
                        res.json("Invalid credentials");
                    }
                });
            }
            else
                res.json("User Not Found...");
        }
    });
    
}

//update user registered events in the database
var registerEvent=function(obj,res){
    if(session.email==null){
        res.json('Please login first');
    }
    else{
    //here email is obtained from session
    var email=session.email;
    var events=obj.events;
    var branch=obj.branch;

    //check for already registered events
    User.find({email:email,"events.branch":branch,"events.events":events},function(error,edata){
        if(edata.length>0){
            //console.log('Already registered for current event');
            res.json('Already registered for current event');
        }
        else{
            //check to update or add
            User.find({"email":email,"events.branch":branch},function(er,d){
                // Add the events into array of existing schema in DB
                if(d.length>0){
                    User.update({"email":email,"events.branch":branch},{$push:{"events.$.events":events}},function(err,data) {
                        if (err){
                            throw err;  
                            res.json('failed');
                        }
                        //console.log('Event Registration successfull');    
                        res.json('Event Registration successfull');
                        });        
                }
                else{
                    //save as new events array for new branch
                    User.update({email:email},{$push:{events:[{branch:branch,events:[events]}]}},function(errr,dd){
                        if (errr){
                            //console.log('Error in Registering user data: '+err);  
                            throw err;  
                            res.json('failed');
                        }

                        //console.log('Event Registration successfull');    
                        res.json('Event Registration successfull');
                    })
                }
        })
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            secure:false,
            port:25,
            auth: {
              user: 'zestmiracle@gmail.com',
              pass: 'AABEHNPSV'
            },
            tls:{
                rejectUnauthorized: false
            }
          });
          
          var mailOptions = {
            from: 'zestmiracle@gmail.com',
            to: session.email,
            subject: 'Zest Event Registration',
            html:'You have successfully registered for '+'<b>'+obj.events+'</b> event of '+'<b>'+obj.branch+'</b> branch'
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
        }
    })
    }
}

//TeamRegister
var teamRegister = function(obj,res){
    if(session.email==null){
        res.json('Please login first');
    }
    else{
        var email = session.email;
        var teamname = obj.teamname;
        var teamevent = obj.teamevent;
        var teameventbranch = obj.teameventbranch;
        //teammembers(only 4 per team)
        var teammember1name = obj.teammember1name;
        var teammember1email = obj.teammember1email;
        var teammember1mobile = obj.teammember1mobile;
        var teammember1college = obj.teammember1college;
        var teammember2name = obj.teammember2name;
        var teammember2email = obj.teammember2email;
        var teammember2mobile = obj.teammember2mobile;
        var teammember2college = obj.teammember2college;
        var teammember3name = obj.teammember3name;
        var teammember3email = obj.teammember3email;
        var teammember3mobile = obj.teammember3mobile;
        var teammember3college = obj.teammember3college;
        var undefined = "undefined";
        if(teammember1name == this.undefined){
            teammember1name = "-";
        }
        if(teammember1email == this.undefined){
            teammember1email = "-";
        }
        if(teammember1mobile == this.undefined){
            teammember1mobile = "-";
        }
        if(teammember1college == this.undefined){
            teammember1college = "-";
        }
        if(teammember2name == this.undefined){
            teammember2name = "-";
        }
        if(teammember2email == this.undefined){
            teammember2email = "-";
        }
        if(teammember2mobile == this.undefined){
            teammember2mobile = "-";
        }
        if(teammember2college == this.undefined){
            teammember2college = "-";
        }
        if(teammember3name == this.undefined){
            teammember3name = "-";
        }
        if(teammember3email == this.undefined){
            teammember3email = "-";
        }
        if(teammember3mobile == this.undefined){
            teammember3mobile = "-";
        }
        if(teammember3college == this.undefined){
            teammember3college = "-";
        }
        //console.log(teammember3name);
        User.find({email:email,"team.teamevent":teamevent},function(error,tdata){
            if(tdata.length>0){
                //console.log('User already registered for current event with a team');
                res.json('Already registered for current event with a team');
            }
            else{
                User.update({email:email},{$push:{team:{teamname:teamname,teamevent:teamevent,teameventbranch:teameventbranch,teammembers:[{
                                                                                                            name:teammember1name,
                                                                                                            email:teammember1email,
                                                                                                            mobile:teammember1mobile,
                                                                                                            college:teammember1college
                                                                                                        },
                                                                                                        {
                                                                                                            name:teammember2name,
                                                                                                            email:teammember2email,
                                                                                                            mobile:teammember2mobile,
                                                                                                            college:teammember2college
                                                                                                        },
                                                                                                        {
                                                                                                            name:teammember3name,
                                                                                                            email:teammember3email,
                                                                                                            mobile:teammember3mobile,
                                                                                                            college:teammember3college
                                                                                                        }
                                                                                                    ]
                }}},function(err,data){
                    if(err){
                        throw err;
                        //console.log(err);
                        res.json(err);
                    }
                    
                    var transporter = nodemailer.createTransport({
                        service: 'gmail',
                        secure:false,
                        port:25,
                        auth: {
                          user: 'zestmiracle@gmail.com',
                          pass: 'AABEHNPSV'
                        },
                        tls:{
                            rejectUnauthorized: false
                        }
                      });
            
                      
                      var mailOptions = {
                        from: 'zestmiracle@gmail.com',
                        to: email,
                        subject: 'Zest Event Registration',
                        html:'You have successfully registered for '+'<b>'+obj.teamevent+'</b> event of '+'<b>'+obj.teameventbranch+'</b> branch with a team named '+'<b>'+obj.teamname+'<br>'+
                            '<table border="1" align="center"><tr><th>Name</th><th>Email</th><th>Mobile</th><th>College</th></tr>'
                            +'<tr><td>'+teammember1name+'</td><td>'+teammember1email+'</td><td>'+teammember1mobile+'</td><td>'+teammember1college+'</td></tr>'
                            +'<tr><td>'+teammember2name+'</td><td>'+teammember2email+'</td><td>'+teammember2mobile+'</td><td>'+teammember2college+'</td></tr>'
                            +'<tr><td>'+teammember3name+'</td><td>'+teammember3email+'</td><td>'+teammember3mobile+'</td><td>'+teammember3college+'</td></tr></table>'
                      };
                      
                      transporter.sendMail(mailOptions, function(error, info){
                        if (error) {
                          //console.log(error);
                        } else {
                          //console.log('Email sent: ' + info.response);
                        }
                      });

                    //console.log('Team Registration successful');
                    res.json('Team Registration successful');
                })
            }
        });
    }
}

//retrieveuserData
var retrieveUserData = function(req,res){
    var email = session.email;
    User.find({email:email},function(err,data){
        if(err)
            throw err;
        res.json(data);
    })
}

//updateProfile
var updateProfile = function(obj,res){
    var email = session.email;
    var mobile = obj.mobile;
    User.update({email:email},{$set:{mobile:mobile}},function(err,data){
        if(err)
            throw err;
        res.json('Mobile number Updated');
    })
}
//logoutFromApp
var logoutFromApp = function(req,res){
    session.email=null;
    req.session.destroy(function(err) {
        if(err) {
          //console.log(err);
        } else {
          res.json('Logged out successfully');
        }
        
    })
}

//checkforsidemenu
var checkforsidemenu = function(req,res){
        if(session.email==null) {
            res.json('No Session');
        } 
        else {
          res.json('Session exists');
        }
    }

module.exports.registerToApp = registerToApp;
module.exports.resetPassword = resetPassword;
module.exports.loginToApp = loginToApp;
module.exports.registerEvent = registerEvent;
module.exports.teamRegister = teamRegister;
module.exports.logoutFromApp = logoutFromApp;
module.exports.retrieveUserData = retrieveUserData;
module.exports.updateProfile = updateProfile;
module.exports.checkforsidemenu = checkforsidemenu;