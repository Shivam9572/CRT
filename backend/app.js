const express=require("express");
 const app=express();
 const usersRouter=require('./routers/users');
 const cartRouter=require('./routers/cart');
 const productRouter=require('./routers/products');
 app.get('/',(req,res)=>{
   res.send(`<h1>Welcome to the E-commerce API!</h1>`);
 });
 app.use('/users',usersRouter);
app.use('/products',productRouter);
app.use('/cart',cartRouter);
 app.use((req,res)=>{
    res.status(404);
    res.send("<h1>404 - Page Not Found</h1>");
 })
 app.listen(4000,()=>{
  console.log("4000 port is now servering");
 })