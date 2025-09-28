const { Sequelize } = require('sequelize');
const mysql=require("mysql2");
 
let conneection=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"12345"
});
conneection.query("create database if not exists collage",(err,result)=>{
  if(err){
    console.log(err);
    return;
  }
  console.log("crate database collage");
});
const sequelize = new Sequelize('collage', 'root', '12345', {
  host: 'localhost',
  dialect: 'mysql'
});

(async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})();
module.exports=sequelize;