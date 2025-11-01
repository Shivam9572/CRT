const express=require("express");
const router=express.Router();

const {signup,login,addExpense}=require("../controller/user");
router.post("/signup",signup);
router.post("/login",login);

module.exports=router;