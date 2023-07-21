const express=require('express');
const router=express.Router();

const productControllers=require('../controllers/products');

router.get('/',productControllers.getAddProducts);
module.exports=router;