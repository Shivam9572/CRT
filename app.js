const express = require("express");
const app = express();
const db=require("./utils/dbConnection");

const expenseRouter=require("./routers/expense");
const cors=require("cors");




app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static('public'));
app.use(cors());

app.get("/",(req,res)=>{
    res.status(200).render("index.ejs",{user:"user"});
})
app.use("/expense",expenseRouter);


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
