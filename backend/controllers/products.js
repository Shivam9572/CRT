const path=require('path');
const productServices=require('../services/product');
let getAllProducts=function(req,res){
     res.sendFile(path.join(__dirname,"..","views","home.html"));
}
let getProductsById=function(req,res){
     res.send(`<h1>${productServices.productById(req.params.id)}</h1>`);
}
let addProduct=function(req,res){
     let details=req.body;
    res.send(`${productServices.add(details)}`);
}
module.exports={getAllProducts,getProductsById,addProduct};