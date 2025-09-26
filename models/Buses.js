const { Sequelize, DataTypes } = require('sequelize');
const sequelize=require("../utils/dbConnection");

const Buses=sequelize.define("buses",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true 
    },
    number:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    seats:{
       type:DataTypes.INTEGER,
       allowNull:false
    }
});
 module.exports=Buses;