const express=require('express');
const router=express.Router();
const filledFormControllers=require('../controllers/products');
router.post('/submited_form',filledFormControllers.postFilledForm);

module.exports=router;