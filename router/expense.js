const express=require("express");
const router=express.Router();
const {addExpense,getExpense, deleteExpense}=require("../controller/expense");

router.post("/:email",addExpense);
router.get("/:email",getExpense);
router.delete("/:id",deleteExpense);
module.exports=router;