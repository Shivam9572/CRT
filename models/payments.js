const Payments=sequelize.define("users",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true 
    },
    amountPaid:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    status:{
       type:DataTypes.STRING,
       allowNull:false
    }
});
module.exports=Payments;