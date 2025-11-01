const express=require("express");
const app=express();
const cors=require("cors");
const db=require("./utilits/databaseConnection");
const userRouter=require("./router/user");
const expenseRouter=require("./router/expense");
require("./models/association");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/user",userRouter);
app.use("/expense",expenseRouter);
db.sync({force:false}).then(()=>{
    app.listen(4000,()=>{
    console.log("4000is listean");
});
}).catch((err)=>{
    console.log(err.message);
})