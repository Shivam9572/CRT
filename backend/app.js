const express=require("express");
 const app=express();
 const courseRouter=require('./routers/course');
 const studentRouter=require('./routers/students');
 app.get('/',(req,res)=>{
   res.send(`<h1>Welcome to the Student & Course Portal API!</h1>`);
 })
app.use('/students',studentRouter);
app.use('/courses',courseRouter);
 app.use((req,res)=>{
    res.status(404);
    res.send("<h1>404 - Page Not Found</h1>");
 })
 app.listen(4000,()=>{
  console.log("4000 port is now servering");
 })