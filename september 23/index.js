const mongoose =require('mongoose')
const express = require('express')
const app =express();             
app.use(express.json())


//--------->>>>>> npm install mongoose --save
const url ="mongodb://localhost:27017/config"
mongoose.connect(url).then((data)=>{
    console.log("connected db");
}).catch((e)=>{
    console.log("error",e);
})

//-------------------->>>>>>>>>> mongoose.model is two attributes
//------------1).folder name 2).structure of data we want to see as json
const Schema =mongoose.Schema;
const cs = new Schema({
    NAME:{
        type:String
    },
    SUBJECT:{
        type:String
    },
    MARKS:{
        type:Number
    }
    },{versionKey:false})
const markSchema =mongoose.model("marks",cs)

//-------------->>>>>>>>> in marks folder,use find keyword to find all the data


// markSchema.find((err,data)=>{        
//     if(err){
//         console.log("error",err);   
//     }
//     else{
//         console.log("data",data);
//     }
// })

// markSchema.findById ('636df5847f7bf094bbfbe376',(err,data)=>{        
//    console.log(data);
//    console.log(data._id);
//    console.log(typeof data._id);
// })

// markSchema.find({"MARKS":90},(err,data)=>{
//     console.log(data);
// })


// markSchema.find({"MARKS":{"$gte":60}},(err,data)=>{
//     console.log(data);
// })

//---------------->>>>>>>>>>> marks sort on desecending order
// markSchema.find({"MARKS":{"$lt":50}}).sort({MARKS:"descending"}).exec((err,data)=>{ 
//    if(err){
//     console.log(err);
//    }else{
//     console.log(data);
//    }
// })




//------------------->>>>>>>>> use create keyword,to push new data into the marks folder

// markSchema.create(
// {
//     NAME:"visuwan",SUBJECT:"tamils",MARKS:90
// }).then((data)=>{
// console.log("data is inserted");
// })


//--------------------------->>>>>>>>>>>>>>>>>>>>>>> find the data by ID and update into new name,marks,subject 

// markSchema.findByIdAndUpdate('636df6544ca8f3253cf43d7e',{
//     NAME:"viswanathan",SUBJECT:"english",MARKS:80
// },(err,data)=>{
//     console.log(err);
//     console.log(data);
// })

//-------------------->>>>>>>>>>>>>>>>>>>>>>>>>> find the data by name,marks and update the name,marks

// markSchema.findOneAndUpdate({NAME:"KOUSHIC",MARKS:0},{NAME:"v.koushic",MARKS:15},(err,doc,res)=>{
//     console.log(doc);
// })

//----------------------->>>>>>>>>>>>>>>>>>>>>>>>> find the daa by name,sub,marks and delete it

// markSchema.findByIdAndDelete ('636de87c65a1811341655fd4',(err,data)=>{
//     console.log(data);
// })

//-------------------->>>>>>>>>>>>>>>>>>>>>>>>>> find the data by name,marks and delete the name,marks

// markSchema.findOneAndDelete({NAME: "KOUSHIC",
// SUBJECT: "TAMIL",
// MARKS: 96},(err,data)=>{
//     console.log(data);
// })


//---------------------->>>>>>>>>>>>>> how to get data from mongodb to postman

app.get('/marks',async (req,res)=>{
    const id = req.query.id;
    if(id){
        const marksById =await markSchema.findById(id)
            res.status(200).json(marksById);
            return ; 
    }

    //------------------>>>>>>>>>> not recommended to do get body from 'get' method so use 'post' method
    // const body = req.body;      
    // console.log("using body",body);
    // if(body){
    //     const marksBody =await markSchema.find(body)
    //     res.status(200).json(marksBody);
    //     return ; 
    // }
    const marksAll =await markSchema.find()
        res.status(200).json(marksAll);
        return ;
})


app.post('/marks-with-filter',async (req,res)=>{
    const body = req.body;      
    console.log("using body1",body);
    //if(body)
    if(body.NAME || body.MARKS || body.SUBJECT){
        console.log("using body2",body);
        const marksBody =await markSchema.find(body)
        res.status(200).json(marksBody);
        return ; 
    }
    res.status(400).json({message:"Filter WENT WRONG"})
})

// app.put('/update-marks',async(req,res)=>{
//     const body =req.body;
//     console.log("updated is 1 ",body);
//     if(!body.id){
//         res.status(400).json({message:"id is not presented"})
//         return;
//     }
//     const id = body.id;
//     const updateMarks = await markSchema.findByIdAndUpdate(id,body)
//     res.status(200).json(updateMarks)
//     console.log("updated is ",body);
//     return;
// })




app.listen(8080,(err)=>{
    if(err)console.log("error",err);
    console.log("server is up");
})






















