const {sendErrorResponse,sendResponse}=require('../utils/response');

let getCartById=(res,id)=>{
    try {
        if(id>10){
        throw new Error(`userId:${id} is not found`);
    }
    sendResponse(res,`list cart of userId:${id}`,200);
    } catch (error) {
        error.statusCode=404;
        sendErrorResponse(res,error);
    }
}
let addCart=(res,id)=>{
    try {
        if(id>10){
        throw new Error(`userId:${id} is not found`);
    }
    sendResponse(res,`Add cart in userId:${id}`,200);
    } catch (error) {
        error.statusCode=404;
        sendErrorResponse(res,error);
    }
}
module.exports={getCartById,addCart};