const mongoose =require('mongoose')
const express = require('express')
const bcrypt = require('bcrypt')//---------->>>>> npm install bcrypt --save
const jwt = require('jsonwebtoken')//-------------->>>>>> npm install jsonwebtoken --save
const tokenVerification = require('./tokenVerification')
const app =express();             
app.use(express.json())
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

const UserSchema =require('./userSchema');//-----------> file name require




app.post('/register',async(req,res)=>{
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
    body.password=await bcrypt.hash(body.password,6)
    await UserSchema.create(body)
    res.status(200).json({message:"Registration is compeleted"})
    return ;
})

app.post('/login',async (req,res)=>{
    const body =req.body
    
    if(!body.email||!body.password){
        res.status(400).json({message:"Login Data is invalid"})
        return;
    }
    const isUserExists =await UserSchema.findOne({email:body.email})
    if(!isUserExists){
        res.status(400).json({message:"user not found"})
        return;
    }
    const isPasswordCorrect = await bcrypt.compare(body.password,isUserExists.password)
    if(!isPasswordCorrect){
        res.status(401).json({message:"username/password is not correct"});
        return;
    }
    const secretKey = "secretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkey" ;
    const userToken =jwt.sign({email:body.email},secretKey,{expiresIn:'1d'})
    res.status(200).json({token:userToken})
})



app.get('/verify-data',tokenVerification,async(req,res)=>{
    console.log("verification compeleted");
    res.json({message:"verification completed"})
})