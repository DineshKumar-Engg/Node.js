const mongoose =require('mongoose')
const express = require('express')
const UserSchema = require('./userSchema')
const passport = require('./passportAuth')
const jwt = require('jsonwebtoken')
const app =express();             
app.use(express.json())
// passport.initialize()
// app.use(passport.session())
const secretKey = "secretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkey" ;

const url ="mongodb://localhost:27017/auth"  //---------->>>>>(mongodb://localhost:27017/ (auth)-->> this create new database )
mongoose.connect(url).then((data)=>{
    console.log("connected db");
}).catch((e)=>{
    console.log("error",e);
})
app.listen(8080,(err)=>{
    if(err)console.log("error",err);
    console.log("server is up");
})

//----------------->>>>>npm install passport passport-local passport-jwt jsonwebtoken --save

app.post('/register-passport',async(req,res)=>{
    const body=req.body;
    if(!body.name||!body.email||!body.password){
        res.status(400).json({message:"Data is invalid"})
        return;
    }
    const emailAlreadyExists = await UserSchema.findOne({email:body.email})
    if(emailAlreadyExists){
        res.status(400).json({message:"Email is already exists"})
        return ;
    }
    // body.password=await bcrypt.hash(body.password,6)
    await UserSchema.create(body)
    res.status(200).json({message:"Registration is compeleted"})
    return ;
})

app.post('/login-passport',passport.authenticate('local',{session:false}),async (req,res)=>{

    const token =jwt.sign(req.user,secretKey)
    res.json({token})
    return;
})  

app.get('/verify-data-passport',passport.authenticate('jwt',{session:false}),async(req,res)=>{
    console.log("success");
    res.send("success")
})