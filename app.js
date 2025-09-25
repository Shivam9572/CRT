const express = require("express");
const app = express();

const studentRouter=require("./routers/students");
const {databaseConnection}=require("./utils/dbConnection");
app.use(express.json());
app.use("/students",studentRouter);

app.use((err, req, res, next) => {
   if(err){
    console.log('Express error handler:');
    res.status(500).json({ "message": 'An error occurred', "error": err.message });
   }else{
    next();
   }

});
app.use((req,res)=>{
    res.status(404).send("page not found");
})
app.listen(4000, () => {
    console.log("4000 in running server"); 
    databaseConnection();
})