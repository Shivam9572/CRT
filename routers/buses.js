const expres=require("express");
const router=expres.Router();
const {addBus,getBuses}=require("../controllers/buses");

router.get("/available/:seats",getBuses);
router.post("/",addBus);
module.exports=router;