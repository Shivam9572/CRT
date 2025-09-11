const cartServices=require('../services/cart');
const { sendResponse, sendErrorResponse } = require('../utils/response');
let products=(res)=>{
    sendResponse(res,"list of all products",200);

}
let productById=(res,id)=>{
    try {
        if(id>10){
            throw new Error("product not found");
        }
        sendResponse(res,`${id}`,200);
    } catch (error) {
        error.statusCode=404;
        sendErrorResponse(res,error);
    }
}
let addProduct=(res,deatils)=>{
    try {
        if(!deatils.name){
            throw new Error("name must be required");
        }
        sendResponse(res,deatils,200);
    } catch (error) {
        error.statusCode=404;
        sendErrorResponse(res,error);
    }
}
module.exports={products,productById,addProduct};