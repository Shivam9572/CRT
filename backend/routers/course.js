const express=require('express');
const router=express.Router();

const courses = [

{ id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },

{ id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }

];

router.get('/',(req,res)=>{
   let send="courses:";
    for(let i=0;i<courses.length;i++){
        if(i==courses.length-1){
            send +=courses[i].name;
        }else{
            send +=courses[i].name+",";
        }
    }
    res.send(`<h1>${send}</h1>`);
});
router.get("/:id",async(req,res,next)=>{
     let id=req.params.id;
     let found=()=>{
       return new Promise((reslove,reject)=>{
           for(let i=0;i<courses.length;i++){
              if(courses[i].id==id){
                reslove(courses[i]);
              }
           }
           reject();
       });
     }
     try{
        let course=await found();
        res.send(`<h1>Course: ${course.name}, Description: ${course.description}</h1>`);
     }
     catch(err){
         next();
     }
     
});
router.use((req,res)=>{
    res.status(404);
    res.send("<h1>courses Not Found</h1>");
 });

module.exports=router;