var mongoose = require('mongoose');

var Schema_product=mongoose.model('PRODUCTS',{
    product_id:{
        type: String  
        },
    product_name:{
        type: String,
        trim:true  
        },
    mrp:{
            type: Integer,
        },
    category_id:{
                type: String
            },
    date_introduced:{
                type: String
    },
    num_purchases:{
        type: String
    }
 });

 module.exports={Schema_shop};
