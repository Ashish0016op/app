const express= require('express');
const router=express.Router();
const shopDetailsControllers=require('../controllers/products');
router.get('/shop_details',shopDetailsControllers.getShopDetails);
module.exports=router;