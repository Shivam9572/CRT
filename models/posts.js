const { Sequelize, DataTypes } = require('sequelize');
const sequelize=require("../utils/dbConnection");

const Posts=sequelize.define("Post",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    content:{
        type:DataTypes.STRING,
        allowNull:false
    }
});
module.exports=Posts;