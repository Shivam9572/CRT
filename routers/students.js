const express=require("express");
const router=express.Router();

const {getStudent,getStudents,addStudent ,updateStudent,deleteStudent}=require("../controllers/students");
router.post("/",addStudent);
router.get("/",getStudents);
router.get("/:id",getStudent);
router.put("/:id",updateStudent);
router.delete("/:id",deleteStudent);


module.exports=router;