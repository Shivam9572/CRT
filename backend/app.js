const express=require("express");
 const app=express();
 function midddleWare(req,res,next){
  req.user="Guest";
  next();
 }
app.get("/welcome",midddleWare,(req,res)=>{
   res.setHeader("content-type","text/html");
   res.send(`<h1>${req.user}</h1>`);
})
 app.listen(3000,()=>{
   console.log("Server is up and running on port 3000! Ready to handle requests.");
 })