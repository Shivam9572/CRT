let getAllusers=function(req,res){
     res.send("<h1>Fetching all users</h1>");
}
let getUserById=function(req,res){
     res.send(`<h1>Fetching user with ID: ${req.params.userId}</h1>`);
}
let addNewUser=function(req,res){
    res.send("<h1>Adding a new user</h1>");
}
module.exports={getAllusers,getUserById,addNewUser};