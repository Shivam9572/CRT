
const productServices=require('../services/product');
let getAllProducts=function(req,res){
     res.send(`<h1>${productServices.products()}</h1>`);
}
let getProductsById=function(req,res){
     res.send(`<h1>${productServices.productById(req.params.id)}</h1>`);
}
let addProduct=function(req,res){
    res.send(`<h1>${productServices.add()}</h1>`);
}
module.exports={getAllProducts,getProductsById,addProduct};