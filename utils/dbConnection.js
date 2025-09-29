const { Sequelize } = require('sequelize');
const mysql=require("mysql2");
 
let conneection=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"12345"
});
conneection.query("create database if not exists bus_booking",(err,result)=>{
  if(err){
    console.log(err);
    return;
  }
  console.log("crate database bus_booking");
});
const sequelize = new Sequelize('bus_booking', 'root', '12345', {
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