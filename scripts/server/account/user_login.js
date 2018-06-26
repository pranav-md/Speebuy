var mongoose = require('mongoose');
var {Create_acc} = require('./account/account_schema');

var login_user =function(req,res) {

    if(req.body.phnum==null)
    {
        Create_acc.find({
            email:  req.body.email,
            password: req.body.password
        }).then((acc_found) =>{
            if(!acc_found)
            {
                res.status(404).send("not found");
            }
            else
            {
                res.status(200).send("found");
            }
            console.log('Account found is:',acc_found);
        }); 
    }
    else
    {
        Create_acc.find({
            phnum: req.body.phnum
         }).then((acc_found) =>{
            if(!acc_found)
            {
                res.status(404).send("not found");
            }
            else
            {
                res.status(200).send("found");
            }
            console.log('Account found is:',acc_found);
        }); 

    }

   /* newuser.save().then((doc)=>{
        res.status(201).send(doc);
    },
    (e)=>{
        res.status(401).send(e);
    }); */
};
module.exports = login_user;
