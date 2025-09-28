const { where } = require("sequelize");
const Users=require("../models/users");
const Posts=require("../models/posts");


async function getUsers(req,res){
   try {
      let users=await Users.findAll();
      
      users=users.map(u=>u.toJSON());
      res.status(200).json(users);
   } catch (error) {
     console.log(error);
     res.status(404).send("something went wrong");
   }
}
async function getUser(req,res){
   try {
    let id=req.params.id;
      let user=await Users.findOne({where:{id:id}});
      if(user==null){
        res.send("not user found");
        return;
      }
      
      res.status(200).send(user);
   } catch (error) {
     console.log(error);
     res.status(404).send("something went wrong");
   }
}

async function addUser(req,res){
     try {
      let {name,email,phone}=req.body;
      if(!name || !email ){
        res.status(500).send("name,email are must be required");
      }else{
        let result=await Users.create({name:name,email:email,phone:phone});
        res.status(200).send(result.toJSON());
      }
   } catch (error) {
     console.log(error);
     res.status(404).send("something went wrong");
   }
}
async function deleteUser(req,res){
  let id=req.params.id;
  try {
    let result=await Users.destroy({where:{id:id}});
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).send("error");
  }
}
async function updateUser(req,res){
  let id=req.params.id;
 try {
      let {name,email,phone}=req.body;
      if(!name || !email || !phone ){
        res.status(500).send("name,email,phone are must be required");
      }else{
        let result=await Users.update({name:name,email:email,phone:phone},{where:{id:id}});
        res.status(200).json(result);
      }
   } catch (error) {
     console.log(error);
     res.status(404).send("something went wrong");
   }
}
async function createPost(req,res){
  let id=req.params.id;
  try {
    let user=await Users.findOne({where:{id:id}});
    if(user != null){
       let post=await Posts.create({
        ...req.body,userId:id
       });
       res.status(200).send(post);
    }else{
      res.status(500).send("user not found");
    }
  } catch (error) {
    
  }
}
async function getPostsOfUser(req,res){
    let id=req.params.id;
    try {
    let user=await Users.findOne({where:{id:id}});
    if(user != null){
       let posts=await Posts.findAll({where:{
        userId:id
       }});
       posts=posts.map((p)=>p.toJSON());
       
       res.status(200).send(posts);
    }else{
      res.status(500).send("user not found");
    }
  } catch (error) {
    
  }
}

module.exports={getUsers,addUser,deleteUser,updateUser,getUser,createPost,getPostsOfUser};