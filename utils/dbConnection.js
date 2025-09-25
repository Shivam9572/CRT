const mysql = require('mysql2');

const config = {
    host: "localhost",
    user: "root",
    password: "12345",
    database: "test"

};
const connection= mysql.createConnection(config);;
function databaseConnection() {
    try {
      
        connection.connect((err)=>{
            if(err){
                throw err;
            }
            console.log("database is connected");
        })
        connection.query("create table IF NOT EXISTS students(id int AUTO_INCREMENT primary key,name varchar(250) not null,email varchar(250) not null,age int not null)", (err, result) => {
            if (err) {
                throw err;
            }
            
        });
        return connection;
    } catch (error) {
        console.log(error.sqlMessage);

    }
}


module.exports = {databaseConnection,connection};