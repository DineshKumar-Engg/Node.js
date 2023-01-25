const passport =require('passport')
const passportJwt = require('passport-jwt')
const ExtractJwt = passportJwt.ExtractJwt;
const strategy = require('passport-local').Strategy;
const passwordJwtStrategy = passportJwt.Strategy;
const userSchema = require('./userSchema')
const secretKey = "secretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkeysecretkey" ;

const userNamePasswordStrategy = new strategy(
    {
        usernameField:'email',
        passwordField:'password',
      
    },
    async function (email,password,done){
        const user = await userSchema.findOne({email,password})
        if(!user){
            return done(null,null,{message:"Authentication is failed"})
        }
        return done(null,{email:user.email},{message:"logged in succefuly"})
    }
)   
passport.use(userNamePasswordStrategy)  

const jwtStrategy = new passwordJwtStrategy(
{
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:secretKey
},
async function(jwtJson,done)
{
    const user = await userSchema.findOne({email:jwtJson.email})
    if(!user){
        return done(null,null)
    }
    return done(null,{email:user.email})
}
)

passport.use(jwtStrategy)

module.exports=passport