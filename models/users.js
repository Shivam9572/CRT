const { DataTypes } = require("sequelize");
const seqelize=require("../utilits/databaseConnection");

let Users=seqelize.define("user",{
    
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        primaryKey:true,

    },
    password:{
        type:DataTypes.STRING,
        primaryKey:true,

    }
});
module.exports=Users;