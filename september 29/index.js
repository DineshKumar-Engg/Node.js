const mongoose =require('mongoose')
const express = require('express')
const app =express();             
app.use(express.json())

//--------->>>>>> npm install mongoose --save
//------------>>>>>>>>> method to connect to mongodb
const url ="mongodb://localhost:27017/config"
mongoose.connect(url).then((data)=>{
    console.log("connected db");
}).catch((e)=>{
    console.log("error",e);
})
//------------------------->>>>>>>>>>>>> method to connect to server use express 
app.listen(8080,(err)=>{
    if(err)console.log("error",err);
    console.log("server is up");
})

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
    },
    IS_DELETED:{
        type:Boolean,
        default:false
    }
    },{versionKey:false})
const markSchema =mongoose.model("marks",cs)



app.post('/add-marks',async (req,res)=>{
    const body = req.body;      
    console.log("incoming data is :",body);
    if(!body.NAME || !body.MARKS || !body.SUBJECT){
        console.log("using body2",body);
        res.status(400).json({message:"Data invalid"})
        return ; 
    }
     await   markSchema.create(body)

     res.status(201).json({message:"data successfully created"})
})

// app.put('/update-marks',async(req,res)=>{   //----------->>>>>>>>>>> total body updated
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

app.put('/update-marks',async(req,res)=>{   //----------->>>>>>>>>>> just name in body updated or how to updated single data
    const body =req.body;
    console.log("updated is 1 ",body);
    if(!body.id){
        res.status(400).json({message:"id is not presented"})
        return;
    }
    const id = body.id;
    const updateMarks = await markSchema.findByIdAndUpdate(id,body)
    if(!updateMarks){
        res.status(400).json({message:"id is not present in db"})
        return;
    }else{
    res.status(200).json({message:"Data succefully updated"})
    }
    console.log("updated is ",body);
    return;
})


app.delete('/delete',async (req,res)=>{ //--------------------->>>>>>>> hard delete
const id =req.query.id;
if(!id){
    res.status(404).json({message:"id is not present in query"})
    return;
}
const deleteId = await markSchema.findByIdAndDelete(id)
if(!deleteId){
    res.status(400).json({message:"id is not present in db"})
    return;
}else{
    res.status(200).json({message:"successfully deleted"})
}
console.log("deleted id is :",id);
return;
})


app.delete('/delete-soft',async (req,res)=>{ //------------------->>>>>>>> soft delete ..data is peresent and show schema IS_delted:true
    const id = req.query.id;
    if(!id){
        res.status(404).json({message:"id is not present in query"})
        return;
    }
    const deleteId = await markSchema.findByIdAndUpdate(id,{IS_DELETED:true})
        res.status(200).json({message:"data got deleted"})
    }
)

app.get("/mark_pages",async(req,res)=>{
    const page_num=req.query.page_num;
    if(!page_num){
        res.status(400).json({message:"page number is invalid"})
    }
    const marks=await markSchema.find().limit(10).skip((page_num-1)*12).exec()
    if(marks.length===0){
        res.status(400).json({message:"page num is invalid"})
    }
    const total_records=await markSchema.count();
    res.json({total_records,marks})
})


//------------>>>>>>>>>>>>>>>>>>>>>>> npm install express-rate-limit
const ratelimiter =require('express-rate-limit')
const apiLimiter =ratelimiter({
    max:5,
    windowMS:10000,
    message:"please try after 10seconds"
})
app.use(apiLimiter)  //------------->>>>>> how many times we can referesh or response to limit in count max:5 within windowMS:10000millisecond 