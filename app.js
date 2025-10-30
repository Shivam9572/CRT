const express=require("express");
const app=express();
const cors=require("cors");
const db=require("./utilits/databaseConnection");
const userRouter=require("./router/user");

app.use(express.json());
app.use(cors());
app.use("/user",userRouter);
db.sync({force:false}).then(()=>{
    app.listen(4000,()=>{
    console.log("4000is listean");
});
}).catch((err)=>{
    console.log(err.message);
})