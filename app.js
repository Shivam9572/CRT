const express = require("express");
const app = express();
const db=require("./utils/dbConnection");
const userRouter=require("./routers/users");
const busRouter=require("./routers/buses");
const bookingRouter=require("./routers/booking");
const cors=require("cors");
const { booking } = require("./controllers/users");
require("./models/index");



app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static('public'));
app.use(cors());

app.get("/",(req,res)=>{
    res.status(200).render("index.ejs",{user:"user"});
})
app.use("/users",userRouter);
app.use("/buses",busRouter);
app.use("/booking",booking);

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
