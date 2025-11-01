
const Expense=require("./expense");
const Users = require("./users");

Users.hasMany(Expense, { foreignKey: 'useremail', as:"expenses",onDelete: 'CASCADE', hooks: true }); 
Expense.belongsTo(Users, { foreignKey: 'useremail' });
module.exports={Users,Expense};
