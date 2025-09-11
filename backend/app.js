const express=require("express");
 const app=express();
 const userRouter=require('./routers/users');
 const orderRouter=require('./routers/orders');
app.use('/orders',orderRouter);
app.use('/users',userRouter);
 app.use((req,res)=>{
    res.status(404);
    res.send("<h1>404 - Page Not Found</h1>");
 })
 app.listen(4000,()=>{
  console.log("3000 port is now servering");
 })