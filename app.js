const express=require("express");
const app=express();
const mysql=require('mysql2');
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"12345",
  
});
db.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    db.query("CREATE DATABASE IF NOT EXISTS test",(err,result)=>{
       if(err){
        console.log(err);
        return;
       }
       db.query("use test");
    });
    console.log("database connected");
});

app.get("/",(req,res)=>{
    let query="create table user(id int AUTO_INCREMENT primary key,name varchar(100) not null,password varchar(100))";
    db.query(query,(err,result)=>{
        if(err){
            console.log(err);
            res.send("error");
            return
        }
        res.json(result);
    })
});

app.listen(4000,()=>{
    console.log("4000 in running server");
})