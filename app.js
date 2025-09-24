const express = require("express");
const app = express();
const busRouter=require("./routers/buses");
const userRouter=require("./routers/user");
const {databaseConnection}=require("./utils/dbConnection");
app.use(express.json());
app.use("/user",userRouter);
app.use("/buses",busRouter);
app.use((err, req, res, next) => {
    console.log('Express error handler:');
    res.status(500).json({ "message": 'An error occurred', "error": err.message });
});
app.listen(4000, () => {
    console.log("4000 in running server"); 
    databaseConnection();
})