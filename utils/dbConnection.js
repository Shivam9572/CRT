const { Sequelize } = require('sequelize');
const mysql=require("mysql2");
 
let conneection=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"12345"
});
function createDatabase(){conneection.query("create database if not exists library",(err,result)=>{
  if(err){
    console.log(err);
    return;
  }
  
});}
createDatabase();
const sequelize = new Sequelize('library', 'root', '12345', {
  host: 'localhost',
  dialect: 'mysql',
  timezone: '+05:30'
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