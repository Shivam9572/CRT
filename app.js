const express=require("express");

const app=express();
const userRouter=require("./router/user");
const path = require("path");
app.set(path.join(__dirname,"views"));
app.use(express.static("public"));


app.use("/",userRouter);

app.listen(3000,()=>{
    console.log("3000 is running");
})