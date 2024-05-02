const mongoose=require('mongoose');
require("dotenv").config()

const connectDb=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"restaurant",
    })
    .then(()=>{
        console.log('connected to database');
    }).catch(err=>{
        console.log(err);
    })
    }

    module.exports=connectDb  