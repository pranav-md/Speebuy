var mongoose = require('mongoose');

var Schema_categories=mongoose.model('Category',{
    category_id:{
        type: String  
        },
    category_name:{
        type: String,
        type: trim
        },
    shop_id:{
        type: String
    },
    shop_ids:[],
    product_ids:[],
    sub_category:{
                type: String
    }
 });

 module.exports={Schema_categories};
