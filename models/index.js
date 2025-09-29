
const Bookings=require("./bookings");
const Buses=require("./buses");
const Users=require("./users");

Users.belongsToMany(Buses,{through:Bookings});
Buses.belongsToMany(Users,{through:Bookings});
Bookings.belongsTo(Users);
Bookings.belongsTo(Buses);
module.exports={Bookings,Buses,Users};