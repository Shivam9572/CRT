const {getBuses,addBus,getBooking}=require("../controllers/buses");
const express=require("express");
const router=express.Router();


router.get("/",getBuses);
router.post("/",addBus);
router.get("/:id/booking",getBooking);
module.exports=router;
module.exports=router;
