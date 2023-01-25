
const express = require('express')
const app =express();
const mongoose =require('mongoose')                               //--------->>>>>> npm install mongoose --save

const url ="mongodb://localhost:27017/config"
mongoose.connect(url).then((data)=>{
    console.log("connected db");
}).catch((e)=>{
    console.log("error",e);
})

const Schema =mongoose.Schema;
const cs = new Schema({
name:{
    type:String,
    required:true,
},
phone_number:{
    type:String,
    required:true,
}
},{versionKey:false})

const user=mongoose.model("user_details",cs)
user.create({
    name:"dinesh",
    phone_number:"123456677890"
}).then((data)=>{
console.log(data);
}).catch((e)=>{
    console.log("error",e);
})

app.listen(8080,(err)=>{
    if(err)console.log("error",err);
    console.log("server is up");
})