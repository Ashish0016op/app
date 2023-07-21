const express=require('express');
const router=express.Router();
const contactUscontrollers=require('../controllers/products');
router.get('/contact_us',contactUscontrollers.getContactUs);

module.exports=router;