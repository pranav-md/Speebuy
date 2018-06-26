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
    },
    phonenum:{
        type: String
    } 
 });

 module.exports={Create_acc};
