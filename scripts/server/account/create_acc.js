var mongoose = require('mongoose');

 var Create_acc=mongoose.model('USERS',{
    email:{
        type: String  
        },
    firstname:{
        type: String,
        trim:true  
        },
    lastname:{
            type: String,
            trim:true  
            },
    password:{
                type: String
            },
    latitude:{
                type: String
    },
    longitude:{
        type: String
    },
    date_of_join:{
        type:Date
    } 
 });
 var newacc_fun =function(req,res) {

        var newuser= new Create_acc({
            email: req.body.email,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            password: req.body.password,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            date_of_join: new Date()
        });
        newuser.save().then((doc)=>{
            res.status(201).send(doc);
        },
        (e)=>{
            res.status(401).send(e);
        }); 
	};
module.exports={Create_acc};
module.exports = newacc_fun;

/*
Acc_create.save().then((doc)=>{
    console.log(JSON.stringify(doc,undefined,2));
},(e)=>{
    console.log('Unable to save',e);
}); 

*/