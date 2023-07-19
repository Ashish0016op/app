const express= require('express');
const app= express();
const bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use('/add_products',(req,res,next)=>{
  console.log('in the middleware');
  res.send('<form action="/products" method="POST">title<input type="text" name="title">size<input type="number" name="title"><button type="submit">Add products</button></form>');
})
app.use('/products',(req,res,next)=>{
  console.log(req.body);
  res.redirect('/');
})
app.use('/',(req,res,next)=>{
  console.log('in another middleware');
  res.send('<h1>Hello from express</h1>');
})

app.listen(5500);

