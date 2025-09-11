const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.end("<h1>Lists of orders</h1>");
});
router.post('/',(req,res)=>{
    res.end('<h1>orders are created</h1>');
});
module.exports=router;