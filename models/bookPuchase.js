const { DataTypes } = require("sequelize");
const sequelize = require("../utils/dbConnection"); // your DB connection file

const BookPurchase = sequelize.define("book_purchase", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fine:{
    type:DataTypes.INTEGER,
    allowNull:false,
    defaultValue:0
  },
  returned:{
    type:DataTypes.DATE,
    allowNull:false
  }
});

module.exports = BookPurchase;
