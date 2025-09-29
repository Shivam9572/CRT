const express=require("express");
const router=express.Router();
const {getUsers, addUser, getUser,deleteUser,userUpdate ,getBooking}=require("../controllers/users");
router.get("/",getUsers);
router.get("/:id",getUser);
router.post("/",addUser);
router.delete("/:id",deleteUser);
router.put("/:id",userUpdate);
router.get("/:id/booking",getBooking);




module.exports=router;