// EJS------------>embeded javascript tempalet
// npm install ejs --save


const express = require('express')
const app =express();
//const router =express.Router();
//app.use(router);

app.use('/',require('./home/index')) ///---------------------->>>>>>>>>>>> another way of get file from folder
app.use('/',require('./food/index'))

app.set('views','./views');
app.set('view engine','ejs'); //---------------->>>>>> npm install ejs --save

// app.get('/home',(req,res)=>{       //---------------->>>>>>>>> use app to localhost
//     res.render('./home.ejs')
//     res.end()
// })

// router.get('/home',(req,res)=>{     //-------------------->>>>>>>>>> another way of use router to localhost
//     res.render('./home.ejs')
//     res.end()
// })






app.listen(8080,(err)=>{
    if(err)console.log("error",err);
    console.log("server is up");
})
