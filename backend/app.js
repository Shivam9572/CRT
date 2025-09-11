const express=require("express");
 const app=express();

 const productRouter=require('./routers/products');
 app.get('/',(req,res)=>{
   res.send(`<h1>Welcome to the Student & Course Portal API!</h1>`);
 });

app.use('/api/products',productRouter);

 app.use((req,res)=>{
    res.status(404);
    res.send("<h1>404 - Page Not Found</h1>");
 })
 app.listen(4000,()=>{
  console.log("4000 port is now servering");
 })