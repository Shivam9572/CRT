const express=require("express");
const router=express.Router();

const {busInsert,getBuses}=require("../controllers/buses");
router.post("/",busInsert);
router.get("/",getBuses);

module.exports=router;