const { DataTypes } = require("sequelize");
const sequelize = require("../utils/dbConnection");

const ReturnBooks=sequelize.define("returnBook",{
   id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fine:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});
module.exports=ReturnBooks;