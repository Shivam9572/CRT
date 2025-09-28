const express=require("express");
const router=express.Router();
const {getStudents,getStudent,deleteStudent,updateStudent,addStudent,addCourse,addCourseToStudent}=require("../controllers/student");
router.get("/",getStudents);
router.get("/:id",getStudent);
router.post("/",addStudent);
router.delete("/:id",deleteStudent);
router.put("/:id",updateStudent);
router.post("/course",addCourse);
router.post("/addStudentCourse",addCourseToStudent);


module.exports=router;