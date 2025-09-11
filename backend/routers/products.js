const express=require('express');

const router=express.Router();

router.get("/",(req,res)=>{
     res.send("<h1>Fetching all products</h1>");
});
router.get('/:id',(req,res)=>{
     res.send(`<h1>Fetching user with ID: ${req.params.id}`);
});
router.post('/',(req,res)=>{
    res.send("<h1>Adding a new product</h1>");
});
module.exports=router;