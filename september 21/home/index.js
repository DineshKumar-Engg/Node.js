const express = require('express');
const router =express.Router();

router.get('/home',(req,res)=>{  //-------------------->>>>>>>>>> another way of use router to localhost   
        res.render('home')
        res.end()
})
router.get('/promise',(req,res)=>{
    const pro = new Promise((resolve,reject)=>{
        //setTimeout(resolve,5000)
        setTimeout(reject,10000)
    })
    pro.then(()=>{
        res.send({
            message:"promise completed"
        })
    }).catch((err)=>{
        res.send({
            message:"promise went wrong"
        })
    })
})

router.get('/async-await',async(req,res)=>{
    const data = await checkingProcess();
    console.log("Data is",data);
    res.send(data)
})

async function checkingProcess(){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,5000)
    }).then(()=>{
        return "everything went well"
    })
}





module.exports=router