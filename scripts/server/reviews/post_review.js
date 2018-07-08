var mongoose = require('mongoose');
var {Create_review} = require('./reviews/reviews_schema');
 
 var newreview_fun =function(req,res) {

        var newreview= new Create_review({
            user_id: req.body.user_id,
            shop_id: req.body.shop_id,
            rating: req.body.rating,
            review_content: req.body.password,
            timestamp:new Date()
        });
        newuser.save().then((doc)=>{
            res.status(201).send(doc);
        },
        (e)=>{
            res.status(413).send(e);
        }); 
	};
module.exports = newacc_fun;
