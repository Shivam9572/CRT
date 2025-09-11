const express=require('express');
const  {getAllProducts,getProductsById,addProduct}=require("../controllers/products");
const router=express.Router();


router.get("/",getAllProducts);
router.get('/:id',getProductsById);
router.post('/',addProduct);
module.exports=router;