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

 function userUpdate(req, res) {
    let { name, email } = req.body;
    let id = req.params.id;

    try {
        connection.query(`UPDATE users set name=?, email=? where id=?`, [name, email, id],(err,result)=>{
            if(err){
                throw err;
            }
           if(result.affectedRows==0){
            res.status(404).send(`userId=${id} is not found`);
            return;
           }
            res.status(200).send(`userID=${id} is updated `);
        });
    } catch (error) {
        console.log(error.sqlMessage);
        res.status(400).send("update failed");
    }
}
function userDelete(req, res) {
    
    let id = req.params.id;

    try {
        connection.query(`DELETE FROM users  where id=?`, [id],(err,result)=>{
            if(err){
                throw err;
            }
           if(result.affectedRows==0){
            res.status(404).send(`userId=${id} is not found`);
            return;
           }
            res.status(200).send(`userID=${id} is Dleted `);
        });
    } catch (error) {
        console.log(error.sqlMessage);
        res.status(400).send("Delete failed");
    }
}
module.exports = { userInsert,userUpdate,userDelete };