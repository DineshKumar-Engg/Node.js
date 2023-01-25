
const express = require('express')
const app =express();
const ejs = require('ejs');

app.get('/food',(req,res)=>{
    ejs.renderFile('./food.ejs',(err,ejsFile)=>{
        if(err){
            console.log(err);
        }else{
            res.send(ejsFile)
        }
    })
})

app.listen(8080,(err)=>{
    console.log("server is running");  ///--->>> to run (node .\serverRenderingfile.js)
})

