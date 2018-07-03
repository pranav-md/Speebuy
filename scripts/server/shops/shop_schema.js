var mongoose = require('mongoose');

var Schema_shop=mongoose.model('SHOPS',{
    shop_id:{
        type: String  
        },
    shop_name:{
        type: String,
        trim:true  
        },
    address:{
            type: String,
            trim:true  
            },
    order_ready:{
                type: String
            },
    contact_no:{
                type: String
    },
    latitude:{
        type: String
    },
    longitude:{
        type: String
    },
    delivery_radius:{
        type: Number
    },
    delivery_avail:{
        type: Boolean
    },
    open:{
        type: Boolean
    },
    product_ids:[],
    category_ids:[]
 });

 module.exports={Schema_shop};
