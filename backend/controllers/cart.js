const cartServices=require('../services/cart');

let getCartByUserId=function(req,res){
     cartServices.getCartById(res,req.params.id);
}
let addCart=function(req,res){
     cartServices.addCart(res,req.params.id);
}

module.exports={getCartByUserId,addCart};