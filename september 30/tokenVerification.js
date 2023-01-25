const UserSchema =require('./userSchema');
const jwt = require('jsonwebtoken')
const secretKey = "secretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkey" ;


const verifyToken = (req,res,next)=>{
    const token =req.headers.authorization;
    if(!token){
        res.status(401).json({message:"token is absent"})
    }
    try{
        const isVerified =jwt.verify(token,secretKey);
        if(!isVerified.email){
            res.status(401).json({message:"Authentication is failed"})
            return;
        }
        req.userEmail=isVerified.email;
        next();
    }catch(err){
        console.log(err);
        res.status(401).json({message:"Authentication is error"})
    }
}
module.exports=verifyToken;