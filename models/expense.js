const { DataTypes } = require("sequelize");
const seqelize=require("../utilits/databaseConnection");
const { Types } = require("mysql2");

let Expense=seqelize.define("expense",{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    amount:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    category:{
        type:DataTypes.STRING,
        allowNull:false
    }

});
module.exports=Expense;