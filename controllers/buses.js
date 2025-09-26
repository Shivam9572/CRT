const Buses=require("../models/Buses");
const { Op } = require("sequelize");
async function getBuses(req,res){
  let {seats}=req.params;
   try {
      let users=await Buses.findAll({where:{seats:{
        [Op.gt]:seats
      }}});
      
      res.status(200).send(users.map(u=>u.toJSON()));
   } catch (error) {
     console.log(error);
     res.status(404).send("something went wrong");
   }
}

async function addBus(req,res){
     try {
      let {number,seats}=req.body;
      if(!number || !seats){
        res.status(500).send("number,seats are must be required");
      }else{
        let result=await Buses.create({number:number,seats:seats});
        res.status(200).send(result.toJSON());
      }
   } catch (error) {
     console.log(error);
     res.status(404).send("something went wrong");
   }
}
module.exports={getBuses,addBus};