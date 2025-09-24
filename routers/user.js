const express=require("express");
const router=express.Router();

const {userInsert,getUsers}=require("../controllers/users");
router.post("/",userInsert);
router.get("/",getUsers);

module.exports=router;