const Users=require("../models/students");


async function getStudents(req,res){
   try {
      let users=await Users.findAll();
      
      res.status(200).send(users.map(u=>u.toJSON()));
   } catch (error) {
     console.log(error);
     res.status(404).send("something went wrong");
   }
}
async function getStudent(req,res){
     try {
      let id=req.params.id;
      let users=await Users.findOne({where:{id:id}});
      if(!users){
        res.status(500).send(`student id:${id} is not found`);
        return;
      }
      res.status(200).send(users.toJSON());
   } catch (error) {
     console.log(error);
     res.status(404).send("something went wrong");
   }
}
async function updateStudent(req,res){
     try {
       let id=req.params.id;
       let {name,email,age}=req.body;
      let user=await Users.findOne({where:{id:id}});
      if(!user){
        res.status(500).send(`student id:${id} is not found`);
        return;
      }else{
         if(!name || !email || !age){
        res.status(500).send("name,email,age are must be required");
      }else{
        let result=await Users.update({name:name,email:email,age:age},{where:{id:id}});
        res.status(200).send(result[0]);
      }
       
      }
      
   } catch (error) {
     console.log(error);
     res.status(404).send("something went wrong");
   }
}
async function deleteStudent(req,res){
     try {
      let id=req.params.id;
      let user=await Users.findOne({where:{id:id}});
      if(!user){
        res.status(500).send(`student id:${id} is not found`);
        return;
      }
       user=await Users.destroy({where:{id:id}});
       res.status(200).send(user[0]);
      
   } catch (error) {
     console.log(error);
     res.status(404).send("something went wrong");
   }
}
async function addStudent(req,res){
     try {
      let {name,email,age}=req.body;
      if(!name || !email || !age){
        res.status(500).send("name,email,age are must be required");
      }else{
        let result=await Users.create({name:name,email:email,age:age});
        res.status(200).send(result.toJSON());
      }
   } catch (error) {
     console.log(error);
     res.status(404).send("something went wrong");
   }
}

module.exports={getStudent,getStudents,updateStudent,addStudent,deleteStudent};