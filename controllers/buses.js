const {connection} = require("../utils/dbConnection");


 function busInsert(req, res) {
    let { busNumber, totalSeats,availableSeats } = req.body;
    try {
        connection.query("SELECT * from buses where busNumber=?",[busNumber],(err,result)=>{
            if(result.length==0){
                if (busNumber && totalSeats && availableSeats) {
                    connection.query("INSERT INTO buses (busNumber, totalSeats,availableSeats) VALUES (?, ?,?)",[busNumber, totalSeats,availableSeats],(err,result)=>{
                       if(err){
                           throw err;
                       }
                       res.status(200).send(result);
                    });
                   
               }else{
                   res.status(404).send("busNumber, totalSeats,availableSeats are must be require");
               }
            }else{
                res.status(200).send("Bus number:"+busNumber+"is allready exits");
            }
        })
        


    } catch (error) {
        console.log(error);
        res.status(400).send("error in insert");
    }
}
function getBuses(req,res){
    try {
        let query="SELECT busNumber,totalSeats,availableSeats FROM buses where availableSeats>?";
         connection.query(query,[0],(err,result)=>{
            if(err){
                throw err;
            }
            if(result.length==0){
                res.status(200).send("not any seats avilable");
                return;
            }
            res.status(200).send(result);
         })
    } catch (error) {
        console.log(error);
        res.status(400).send("error");
    }
}
 
module.exports = { busInsert,getBuses };