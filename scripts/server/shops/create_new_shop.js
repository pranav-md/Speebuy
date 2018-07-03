var mongoose = require('mongoose');
var {Create_shop} = require('./shops/shop_schema');
 
 var newshop_fun =function(req,res) {

        var newshop= new Create_shop({
            shop_name: req.body.shop_name,
            address: req.body.address,
            order_ready: req.body.order_ready,
            email: req.body.email,
            password: req.body.password,
            contact_no:req.body.contact_no,
            latitude: req.body.latitude,
            longitude: req.body.longitude
        });
        newuser.save().then((doc)=>{
            res.status(201).send(doc);
        },
        (e)=>{
            res.status(401).send(e);
        }); 
	};
module.exports = newacc_fun;
