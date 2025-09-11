const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.end("<h1>Lists of users</h1>");
});
router.post('/',(req,res)=>{
    res.end('<h1>users are created</h1>');
});
module.exports=router;