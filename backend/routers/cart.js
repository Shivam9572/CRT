const express=require('express');
const {cartByUserId,addCart}=require('../controllers/cart');
const router=express.Router();


router.get('/:userId',cartByUserId);
router.post('/:userId',addCart);
module.exports=router;