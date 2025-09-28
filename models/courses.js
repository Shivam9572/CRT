const { Sequelize, DataTypes } = require('sequelize');
const sequelize=require("../utils/dbConnection");


const Courses=sequelize.define("courses",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    }
})
module.exports=Courses;