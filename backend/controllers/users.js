const usersServices=require('../services/users');
let getAllUsers=(req,res)=>{
    usersServices.getAllUsers(res);
}
let getUserById=function(req,res){
    usersServices.getUserById(res,req.params.id);
}
let addUser=function(req,res){
    
    usersServices.addUser(res,req.body);
}
module.exports={getAllUsers,getUserById,addUser};