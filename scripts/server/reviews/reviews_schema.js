var mongoose = require('mongoose');

var Schema_reviews=mongoose.model('REVIEWS',{
    review_id:{
        type: String  
        },
    user_id:{
        type: String
        },
    shop_id:{
        type: String
    },
    rating:{
            type: Number
            },
    review_content:{
                type: String,
                trim:true
            },
    timestamp:{
                type: String
    }
 });

 module.exports={Schema_reviews};
