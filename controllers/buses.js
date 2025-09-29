const { Users } = require("../models");
const Buses=require("../models/buses");
const Bookings=require("../models/bookings");
const { Op } = require("sequelize");
async function getBuses(req,res){
 
   try {
      let users=await Buses.findAll();
      
      res.status(200).send(users.map(u=>u.toJSON()));
   } catch (error) {
     console.log(error);
     res.status(404).send("something went wrong");
   }
}

async function addBus(req,res){
     try {
      let {busNumber,totalSeats,availableSeats}=req.body;
      if(!busNumber || !totalSeats || !availableSeats){
        res.status(500).send("number,seats are must be required");
      }else{
        let result=await Buses.create({busNumber:busNumber,totalSeats:totalSeats,availableSeats:availableSeats});
        res.status(200).send(result.toJSON());
      }
   } catch (error) {
     console.log(error);
     res.status(404).send("something went wrong");
   }
}
async function getBooking(req,res) {
  let id=req.params.id;
  try {
    
     let result=await Bookings.findAll({where:{userId:id},include:{model:Users,attributes:["name","email"]},attributes:["id","seatNumber"]});
     res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(404).send("something went wrong");
  }
}
module.exports={getBuses,addBus,getBooking};