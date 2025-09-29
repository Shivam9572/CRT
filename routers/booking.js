const express=require("express");
const router=express.Router();

const {booking,getBooking}=require("../controllers/users");
router.post("/",booking);
