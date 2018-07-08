var express= require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./mongoose');
var {Create_acc} = require('./account/account_schema');
var login_user = require('./account/user_login');
var newacc_fun = require('./account/create_acc');
var newshop_fun = require('./shops/create_new_shop');


var app= express();
app.use(bodyParser.json());

///create account
app.post('/create_acc',(req,res)=>{
    console.log(req.body);
    newacc_fun(req,res);
});

///login account
app.post('/user_login',(req,res)=>{
    console.log(req.body);
    login_user(req,res);
});

///create shop 
app.post('/create_new_shop',(req,res)=>{
    console.log(req.body);
    newshop_fun(req,res);
});

app.listen(3000,()=>{
    console.log('Started on port 3000');
});
