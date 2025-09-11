const path=require('path');
const productServices=require('../services/product');
let getAllProducts=function(req,res){
     productServices.products(res);
}
let getProductsById=function(req,res){
     productServices.productById(res,req.params.id);
}
let addProduct=function(req,res){
     let details=req.body;
    productServices.addProduct(res,req.body);
}
module.exports={getAllProducts,getProductsById,addProduct};