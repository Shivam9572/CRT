const express=require("express");
const router=express.Router();
const {getUsers,addUser,deleteUser,updateUser,getUser}=require("../controllers/users");
router.get("/",getUsers);
router.get("/:id",getUser);
router.post("/",addUser);
router.delete("/:id",deleteUser);
router.put("/:id",updateUser);


module.exports=router;