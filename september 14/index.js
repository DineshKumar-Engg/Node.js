const http = require("http");
const express =require('express')
const app = express();

app.use(express.json()); //---------------------- this for>>>>> getting data from postman..but express cant read it,so use express.json() to readable in log

// app.get('/',(req,res)=>{                   //-------this app.get result of -->localhost:8080-->this json                
//     console.log("this is get");
//     // res.end("im ending") //---------------status code 200

//     res.status(200);
//     // res.end("here im ending ")  //--------------------for status code we set 400

//     res.json({                     //--------------------------- testing with json object return
//         "message":" successfully getting"
        
//     })
// })





app.post ('/signup',(req,res)=>{
    const body =req.body;             ///---------------->>>  request from postman,as a json formate
    console.log("getting data from postman" , body); //////----------->>>> on log  getting all data as json format
    console.log("gettting data on separetely" , body.email , body.password); ////---------->>> on log  getting data from individual variable
    res.json({
        "messeage":"successfully signup"
    });
})





app.put ('/update-user',(req,res)=>{
    console.log("user got updated");
    const body =req.body;             ///---------------->>>  request from postman,as a json formate
    console.log("the updated bod is   " , body); //////----------->>>> on log  getting all data as json format
   
    res.json({
        "messeage":"successfully updated"
    });
})



app.delete ('/deleting-user',(req,res)=>{
    console.log("deletion got updated");
    const body =req.body;             ///---------------->>>  request from postman,as a json formate
    console.log("the deleted body is   " , body); //////----------->>>> on log  getting all data as json format
   
    res.json({
        "messeage":"successfully deleted"
    });
})


app.get('/make-table',(req,res)=>{
    const tableNum = parseInt(req.query.num1);
    const tableMul = parseInt(req.query.num2);
    console.log(tableNum);
    console.log(tableMul);
    console.log("query params key and value from postman" + " " +tableNum ,tableMul);
    const tableData=[];
    for(var i=1;i<tableMul;i++){
        tableData.push((tableNum +"*"+i + "="+(tableNum*i)))
    }
    res.json({
        tableNum,tableData
    });
    res.end();
})

const server = http.createServer(app)
server.listen(8080,'127.0.0.1',()=>{
    console.log("My express server is live");
})

 