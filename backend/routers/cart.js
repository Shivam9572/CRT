const express=require('express');
const router=express.Router();
const {getCartByUserId,addCart}=require('../controllers/cart');
router.get('/:id',getCartByUserId);
router.post('/:id',addCart)
module.exports=router