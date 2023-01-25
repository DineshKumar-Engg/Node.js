const http = require('http')
const fs = require('fs')
const { buffer } = require('stream/consumers')


// const server = http.createServer((req,res)=>{
//     console.log(req);
//     process.exit()//--------------- this option stop event listening 
// })

// how to set header 

// const server = http.createServer((req,res)=>{
//     res.setHeader('content-type','text/html')
//     res.write(`<html> <h1> hi </h1></html>`)
//     res.end()

// })


const server = http.createServer((req,res)=>{
    
    const url = req.url
    if(url === '/'){
            res.setHeader('content-type','text/html')
            res.write(`<html><form  action ='/message' method='POST'><input type='text' name='message' ><input type='submit' value='send' ></form></html>`)
            return res.end()
    }
    if(url==='/message' && http.METHODS == "POST"){

        const body =[]

        req.on('data',(chunk)=>{
           body.push(chunk)
        })

        req.on('end',()=>{
            const parsebody = Buffer.concat(body)
            console.log(parsebody);
        })
        
        fs.writeFileSync('hello.txt',"Dummy") 
        res.setHeader('Location','/')
        res.statusCode = 302
        return res.end()
    }
    console.log(url);
    res.setHeader('content-type','text/html')
    res.write(`<html> <h1> hi </h1></html>`)
    res.end()
})



server.listen(3000)