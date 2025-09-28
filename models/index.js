const Post=require("./posts");
const Users=require("./users");

Users.hasMany(Post);
Post.belongsTo(Users);
module.exports={Users,Post};