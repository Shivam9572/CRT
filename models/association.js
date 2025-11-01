
const Expense=require("./expense");
const Users = require("./users");

Users.hasMany(Expense, { foreignKey: 'userid', as:"expenses",onDelete: 'CASCADE', hooks: true }); 
Expense.belongsTo(Users, { foreignKey: 'userid' });
module.exports={Users,Expense};
