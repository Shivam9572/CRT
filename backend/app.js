const express=require("express");
 const app=express();

 const productRouter=require('./routers/products');
  const cartRouter=require('./routers/cart');
   const userRouter=require('./routers/users');
 app.use(express.urlencoded({ extended: true }));
 app.use(express.json());
 app.get('/',(req,res)=>{
   res.send(`<h1>Welcome to the Student & Course Portal API!</h1>`);
 });

app.use('/products',productRouter);
app.use('/users',userRouter);
app.use('/carts',cartRouter);

 app.use((req,res)=>{
    res.status(404);
    res.send("<h1>404 - Page Not Found</h1>");
 })
 app.listen(4000,()=>{
  console.log("4000 port is now servering");
 })