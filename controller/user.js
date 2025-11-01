const userModel=require("../models/users");

const bcrypt=require("bcrypt");
module.exports.signup=async(req,res)=>{
    
   let {name,email,password,cpassword}=req.body;
   if(!email || !name || !password || !cpassword){
    res.send({success:false,message:"all fields are requiered"});
    return;
   }
   try {
    let user=await userModel.findByPk(email);
    if(user){
        res.send({success:false,message:`${email} already exits`});
        return;
    }
    if(password!=cpassword){
        res.send({success:false,message:`password does not match with confirm password`});
        return;
    }
    bcrypt.hash(password,10,async(err,hash)=>{
        if(!err){
                let respond=await userModel.create({name:name,email:email,password:hash});
                  res.send({success:true,message:respond.email});
        }else{
            throw new Error("bcrypt error");
        }
        
    })
    
  
   } catch (error) {
    console.log(error);
    res.status(404).send({"failed":error.message});
   }
}

module.exports.login=async(req,res)=>{
   
   let {email,password}=req.body;
   if(!email ||  !password) {
    res.status(404).json({success:false,messsage:"all fields are requiered"});
    return;
   }
   try {
    let user=await userModel.findByPk(email);
    if(!user){
        res.status(400).json({success:false,failed:`${email} does not exits`});
        return;
    }
    bcrypt.compare(password,user.password,(err,result)=>{
        if(err){
            throw new Error("bcrypt error");
        }
        if(result){
              res.send({success:true,message:user});
        }else{
             res.send({success:false,message:"please enter correct password"});
        }
    })
   
   
   } catch (error) {
    console.log(error);
    res.status(404).send({success:false,message:error.message});
   }
}

