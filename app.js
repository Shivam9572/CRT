const express = require("express");
const app = express();
const db=require("./utils/dbConnection");
const usersRouter=require("./routers/users");
const busesRouter=require("./routers/buses");
app.use(express.json());


app.use("/users",usersRouter);
app.use("/buses",busesRouter);
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
});
db.sync({ force: false }).then(()=>{
    app.listen(4000, () => {
        console.log("4000 in running server"); 
    });
}).catch((err)=>{
    console.log(err);
})
