
const { Sequelize, DataTypes } = require('sequelize');
const sequelize=require("../utils/dbConnection");

const Bookings=sequelize.define("bookings",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true 
    },
    seatNumber:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
   
});
module.exports=Bookings;