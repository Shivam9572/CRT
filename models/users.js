const { Sequelize, DataTypes } = require('sequelize');
const sequelize=require("../utils/dbConnection");

const Users=sequelize.define("users",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true 
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
       type:DataTypes.STRING,
       allowNull:false
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:false
    }
});




module.exports=Users;