const express=require('express');
const router=express.Router();

const {getAllProducts,getProductsById,addProduct}=require('../controllers/products');
router.get('/',getAllProducts);
router.get('/:id',getProductsById);
router.post('/',addProduct);
module.exports=router;