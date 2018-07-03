var mongoose = require('mongoose');
var {Get_review} = require('./reviews/reviews_schema');
 

var getreview_fun =function(req,res) {

    Get_review.find({
        shop_id:  req.body.shop_id
    }).then((review_found) =>{
        if(!review_found)
        {
            res.status(404).send("not found");
        }
        else
        {
            res.status(200).send(review_found);
        }
        console.log('Account found is:',acc_found);
    });
};
module.exports = newreview_fun;
