const express=require('express');
const app= express();
const adminRoute=require('./routes/admin');
const shopRoute=require('./routes/shop');
const contactRoute=require('./routes/contacts_us');
const filledRoute=require('./routes/filledForm');
const parsedBody=require('body-parser');
app.use(parsedBody.urlencoded({extended:false}));

app.use(adminRoute);
app.use(shopRoute);
app.use(contactRoute)
app.use(filledRoute);

app.use((req,res,next)=>{
    res.status(404).send('<p>page not found</p>');
})

app.listen(5500);
