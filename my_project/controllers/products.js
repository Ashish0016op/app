const path = require('path');
exports.getAddProducts=(req,res,next)=>{
    console.log('in the middleware');
    res.sendFile(path.join(__dirname,'../','views','admins.html'));
}
exports.getContactUs=(req,res,next)=>{
    console.log('in the middleware');
    res.sendFile(path.join(__dirname,'../','views','contact.html'));
}
exports.postFilledForm=(req,res,next)=>{
    console.log('in the middleware');
    res.sendFile(path.join(__dirname,'../','views','filledForm.html'));
}
exports.getShopDetails=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','shops.html'));
}