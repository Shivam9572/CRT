const express=require("express");
const router=express.Router();
const {getStudents,getStudent,updateStudent,deleteStudent,addStudent}=require("../controllers/students");
router.get("/",getStudents);
router.post("/",addStudent);
router.get("/:id",getStudent);
router.put("/:id",updateStudent);
router.delete("/:id",deleteStudent);

module.exports=router;