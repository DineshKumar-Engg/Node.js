const http =require('http');
const express = require('express');
const cookieParser =require('cookie-parser') //--------------->>>>> npm install cookie-parser --save
const app =express();
app.use(express.json());
//app.use(validatePhoneNumber);
app.use(log)
app.use(cookieParser())
const server =http.createServer(app)

app.post('/login',validatePhoneNumber,(req,res)=>{
    const body = req.body;
    console.log("I got this data",body.phoneNumber);
    console.log("you have been signed");
    res.cookie('secret_code','1234')
    res.json({
        message:"successfull signed up"
    })
})

app.get('/isLogin',(req,res)=>{
    const cookie =req.cookies;
    console.log("cookie is",cookie); //--------------->>>>> npm install cookie-parser --save
    if(cookie.secret_code){
        res.status(200).json({
            message:"cookie send"  //--------------->>> cookie is present in postman,request section
        })
    }else{
        res.status(400).json({
            message:"something went wrong" //--------------->>> cookie is absent or deleted in post man
        })
    }
})
function validatePhoneNumber(req,res,next){
const body =req.body;
if(!body.phoneNumber){
throw new Error("phone number is not present")
}
next();
}

function log(req,res,next){
    console.log("request",req.path,"body",req.body,"header",req.headers);
    next();
}


server.listen(8080,'127.0.0.1',()=>{
    console.log("my express server is live");
})