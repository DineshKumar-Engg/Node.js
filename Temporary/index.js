var http = require("http");


const express =require('express');
const handleServer = express();


handleServer.get('/welcome',(req,res)=>{

  res.set('content-type','text/plain')
  res.status(200)
  
 
})


const httpServer = http.createServer(handleServer);
httpServer.listen(8081,'127.0.0.1',()=>{
  console.log("live");      
})

module.exports = httpServer;