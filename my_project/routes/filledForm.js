const express=require('express');
const router=express.Router();
const path=require('path');

router.post('/submited_form',(req,res,next)=>{
    console.log('in the middleware');
    res.sendFile(path.join(__dirname,'../','views','filledForm.html'));
})

module.exports=router;