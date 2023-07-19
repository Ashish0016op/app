const express=require('express');
const router=express.Router();

router.get('/add_products',(req,res,next)=>{
    console.log('in the middleware');
    res.send('<form action="/products" method="POST">title<input type="text" name="title">size<input type="number" name="title"><button type="submit">Add products</button></form>');
})
router.post('/products',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})



module.exports=router;