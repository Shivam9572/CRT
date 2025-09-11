const {sendErrorResponse,sendResponse}=require('../utils/response');

let getAllUsers=(res)=>{
    sendResponse(res,"List of All Users",200);
}
let getUserById=(res,id)=>{
   try {
    if(id>10){
        throw new Error("User not found");
    }
    sendResponse(res,`User with id:${id}`,200);
   } catch (error) {
      error.statusCode=404;
      sendErrorResponse(res,error);
   }
}
let addUser=(res,data)=>{
    
    try {
        if(!data.name){
            
            throw new Error('name must be required');
        }
        sendResponse(res,data,200);
    } catch (error) {
        
        error.statusCode=404;
        sendErrorResponse(res,error);
    }
}
module.exports={getAllUsers,getUserById,addUser};