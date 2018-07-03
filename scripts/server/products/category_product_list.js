var mongoose = require('mongoose');
var {Get_shop} = require('./shops/shop_schema');
var {Get_product} = require('./products/product_schema');

var cat_prd_fun =function(req,res) {

    Get_product.find({
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
    });     newuser.save().then((doc)=>{
        res.status(201).send(doc);
    },
    (e)=>{
        res.status(401).send(e);
    }); 
};
module.exports = newacc_fun;
