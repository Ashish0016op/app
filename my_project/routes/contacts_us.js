const express=require('express');
const router=express.Router();
const path=require('path');

router.get('/contact_us',(req,res,next)=>{
    console.log('in the middleware');
    res.sendFile(path.join(__dirname,'../','views','contact.html'));
})

module.exports=router;