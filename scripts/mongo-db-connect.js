 const MongoClient = require('mongodb').MongoClient;

 MongoClient.connect('mongodb://localhost:27017/Speebuy',(err,db)=>{
     if(err)
     {
       return console.log('Unable to connect mongoDB server');
     }
     console.log('Connected to mongoDB server');
     
     db.close();
 });

