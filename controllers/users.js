const Users=require("../models/users");


async function getUsers(req,res){
   try {
      let users=await Users.findAll();
      
      res.status(200).send(users.map(u=>u.toJSON()));
   } catch (error) {
     console.log(error);
     res.status(404).send("something went wrong");
   }
}

async function addUser(req,res){
     try {
      let {name,email}=req.body;
      if(!name || !email ){
        res.status(500).send("name,email are must be required");
      }else{
        let result=await Users.create({name:name,email:email});
        res.status(200).send(result.toJSON());
      }
   } catch (error) {
     console.log(error);
     res.status(404).send("something went wrong");
   }
}

module.exports={getUsers,addUser};