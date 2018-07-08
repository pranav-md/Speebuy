var mongoose = require('mongoose');
var {Get_shop} = require('./shops/shop_schema');
var {Get_product} = require('./products/product_schema');

var cat_prd_fun =function(req,res) {

    Get_shop.find({
        shop_id:  req.body.shop_id, 
        }).then((shop_found) =>{
        if(!shop_found)
        {
            res.status(404).send("not found");
        }
        else
        {
            var products={};
            var count=0;
            shop_found.product_ids.array.forEach(prd_id => {
                Get_product.find({
                    product_id:prd_id,cateogory_id:req.body.shop_id
                }).then((product_found)=>{
                    products[count++]={product_id:product_found.product_id,
                        product_name:product_found.product_name,
                        product_mrp:product_found.mrp};
                });
            });
            res.status(302).send(products);
        }
    });     newuser.save().then((doc)=>{
        res.status(201).send(doc);
    },
    (e)=>{
        res.status(401).send(e);
    }); 
};
module.exports = newacc_fun;
