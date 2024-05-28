// getting-started.js
const mongoose = require('mongoose');

const dbConnect = async()=>{
    try{
    const res =   await mongoose.connect('mongodb://127.0.0.1:27017/instant');
    if(res) console.log("connected to  mongodb")
    }catch(err){
      console.log("connection to db failed")
    }
}

module.exports = dbConnect