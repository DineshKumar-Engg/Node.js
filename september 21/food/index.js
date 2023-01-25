const express = require('express');
const router =express.Router();

router.get('/food',(req,res)=>{  //-------------------->>>>>>>>>> another way of use router to localhost
    
        res.render('food')
        res.end()
   
    
})

module.exports=router