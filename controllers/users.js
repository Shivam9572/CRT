
const Users = require("../models/users");
const Bookings=require("../models/bookings");
const { Buses } = require("../models");
const { Model } = require("sequelize");



async function getUsers(req, res) {
  try {
    let users = await Users.findAll();

    res.status(200).send(users.map(u => u.toJSON()));
  } catch (error) {
    console.log(error);
    res.status(404).send("something went wrong");
  }
}

async function addUser(req, res) {
  try {
    let { name, email } = req.body;
    if (!name || !email) {
      res.status(500).send("name,email are must be required");
    } else {
      let result = await Users.create({ name: name, email: email });
      res.status(200).send(result.toJSON());
    }
  } catch (error) {
    console.log(error);
    res.status(404).send("something went wrong");
  }
}
async function getUser(req, res) {
  let id = req.params.id;
  try {
    let result = await Users.findAll({ where: { id: id } });
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(404).send("something went wrong");
  }
}
async function deleteUser(req,res) {
  let id = req.params.id;
  try {
    let result = await Users.findByPk(id);
    if (result) {
      result = await Users.destroy({ where: { id: id } });
      res.status(200).send(result);
    }else{
      res.status(500).send("user not found");
    }

  } catch (error) {
    console.log(error);
    res.status(404).send("something went wrong");
  }
}

async function userUpdate(req,res) {
  let id = req.params.id;
  try {
    let result = await Users.findByPk(id);
    if (result) {
      let { name, email } = req.body;
    if (!name || !email) {
      res.status(500).send("name,email are must be required");
    } else {
      let result = await Users.update({ name: name, email: email },{where:{id:id}});
      res.status(200).send(result);
    }
    }else{
      res.status(500).send("user not found");
    }

  } catch (error) {
    console.log(error);
    res.status(404).send("something went wrong");
  }
}
async function booking(req,res) {
   let {seatNumber,userId,busId}=req.body;
   if(!seatNumber || !userId || !busId){
    res.status(500).send("seatNumber,userId,bookId is must be required");
   }else{
      let user=await Users.findByPk(userId);
      let bus=await Buses.findByPk(busId);
      let result=await user.addBuses(bus,{through:{seatNumber:seatNumber}});
      result=await user.getBuses();
      res.status(200).send(result);
   }
}
async function getBooking(req,res) {
  let id=req.params.id;
  try {
    
     let result=await Bookings.findAll({where:{userId:id},include:{model:Buses,attributes:["busNumber"]},attributes:["id","seatNumber"]});
     res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(404).send("something went wrong");
  }
}

module.exports = { getUsers, addUser, getUser,deleteUser,userUpdate ,booking,getBooking};