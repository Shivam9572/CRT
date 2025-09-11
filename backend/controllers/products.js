

let getAllProducts=function(req,res){
     res.send("<h1>Fetching all products</h1>");
}
let getProductsById=function(req,res){
     res.send(`<h1>Fetching products with ID: ${req.params.id}</h1>`);
}
let addProduct=function(req,res){
    res.send("<h1>Adding a new product</h1>");
}
module.exports={getAllProducts,getProductsById,addProduct};