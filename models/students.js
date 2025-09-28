const { Sequelize, DataTypes } = require('sequelize');
const sequelize=require("../utils/dbConnection");

const Students=sequelize.define("students",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true 
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
});




module.exports=Students;