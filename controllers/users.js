const {connection} = require("../utils/dbConnection");


 function userInsert(req, res) {
    let { name, email } = req.body;
    try {

        if (name && email) {
             connection.query("INSERT INTO users (name, email) VALUES (?, ?)",[name, email],(err,result)=>{
                if(err){
                    throw err;
                }
                res.status(200).send(result);
             });
            
        }else{
            res.status(404).send("name & email must be require");
        }


    } catch (error) {
        console.log(error);
        res.status(400).send("error in insert");
    }
}
function getUsers(req,res){
    try {
        let query="SELECT name,email FROM users";
         connection.query(query,(err,result)=>{
            if(err){
                throw err;
            }
            res.status(200).send(result);
         })
    } catch (error) {
        console.log(error);
        res.status(400).send("error");
    }
}
 
module.exports = { userInsert,getUsers };