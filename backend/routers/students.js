const express=require('express');
const router=express.Router();

const students = [

{ id: 1, name: "Alice" },

{ id: 2, name: "Bob" },

{ id: 3, name: "Charlie" }

];

router.get('/',(req,res)=>{
    let send="Student:";
    for(let i=0;i<students.length;i++){
        if(i==students.length-1){
            send +=students[i].name;
        }else{
            send +=students[i].name+",";
        }
    }
    res.send(`<h1>${send}</h1>`);
});
router.get("/:id",(req,res,next)=>{
     let id=req.params.id;
     let name=()=>{
        return new Promise((reslove,reject)=>{
            for(let i=0;i<students.length;i++){
                if(students[i].id==id){
                    reslove(students[i].name);
                }
            }
            reject();
        });
     }
     name().then((msg)=>{
        res.send(`<h1>Students:${msg}`);
     }).catch((msg)=>{
        next();
     })
     
        
    }   
     
  
);
router.use((req,res)=>{
    
    res.setHeader('content-type','teext/html');
    res.status(404);
    res.end("<h1>student Not Found</h1>");
 });

module.exports=router;