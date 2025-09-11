const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.end("<h1>Here is the list of books!</h1>");
});
router.post('/',(req,res)=>{
    res.end('<h1>Book has been added!</h1>');
});
module.exports=router;