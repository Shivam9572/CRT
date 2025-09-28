const Students=require("./students");
const Courses=require("./courses");
const StudentCourse=require("./studentCourse");

Students.belongsToMany(Courses,{through:StudentCourse});
Courses.belongsToMany(Students,{through:StudentCourse});
module.exports={Students,Courses,StudentCourse};