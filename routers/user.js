const express=require("express");
const router=express.Router();

const {userInsert,userUpdate,userDelete}=require("../controllers/users");
router.post("/",userInsert);
router.put("/:id",userUpdate);
router.delete("/:id",userDelete);

module.exports=router;