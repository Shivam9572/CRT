const { Sequelize, DataTypes } = require('sequelize');
const sequelize=require("../utils/dbConnection");

const Student=sequelize.define("student",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
       type:DataTypes.STRING,
       allowNull:false
    }
});

module.exports=Student;