const userModel=require("../models/users");

module.exports.signup=async(req,res)=>{
    if(!req.body){
        res.send("errr");
        return;
    }
   let {name,email,password,cpassword}=req.body;
   if(!email || !name || !password || !cpassword){
    res.send({"failed":"all fields are requiered"});
    return;
   }
   try {
    let user=await userModel.findByPk(email);
    if(user){
        res.send({"failed":`${email} already exits`});
        return;
    }
    if(password!=cpassword){
        res.send({"failed":`password does not match with confirm password`});
        return;
    }
    let respond=await userModel.create({name:name,email:email,password:password});
    res.send({"sucess":respond});
   } catch (error) {
    console.log(error);
    res.status(404).send({"failed":error.message});
   }
}

module.exports.login=async(req,res)=>{
   
   let {email,password}=req.body;
   if(!email ||  !password) {
    res.send({"failed":"all fields are requiered"});
    return;
   }
   try {
    let user=await userModel.findByPk(email);
    if(!user){
        res.send({"failed":`${email} does not exits`});
        return;
    }
    if(user.password != password){
        res.send({"failed":`please enter correct password`});
        return;
    }
   
    res.send({"sucess":user});
   } catch (error) {
    console.log(error);
    res.status(404).send({"failed":error.message});
   }
}