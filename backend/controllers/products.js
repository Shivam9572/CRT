

let getAllProducts=function(req,res){
     res.send("<h1>Fetching all products</h1>");
}
let getProductsById=function(req,res){
     res.send(`<h1>Fetching user with ID: ${req.params.id}`);
}
let addProduct=function(req,res){
    res.send("<h1>Adding a new product</h1>");
}
module.exports={getAllProducts,getProductsById,addProduct};