const express= require('express');
const shops= express.Router();






shops.use('/products',(req,res,next)=>{
    console.log('in another middleware');
    res.send('<h1>Hello from express</h1>');
})



  module.exports=shops;