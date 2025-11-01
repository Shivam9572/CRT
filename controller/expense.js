const Expense=require("../models/expense");
module.exports.addExpense=async(req,res)=>{
  let email=req.params.email;
  let {amount,description,category}=req.body;
  if(!amount || !description || !category){
    res.json({success:false,message:"allfields must be required"});
    return;
  }

   try {
      let result=await Expense.create({amount:amount,description:description,category:category,useremail:email});
      
      res.send( result);

   } catch (error) {
     
      res.status(500).send(error.message);
   }

}
module.exports.getExpense=async(req,res)=>{
    let email=req.params.email;
    try {
        let result=await Expense.findAll({where:{useremail:email },attributes:["id","amount","description","category"]});
        res.send(result);
    } catch (error) {
        res.send(error.message);
    }
}
module.exports.deleteExpense=async(req,res)=>{
    let id=req.params.id;

    try {
        let result=await Expense.findByPk(id);
        if(!result){
           res.send({success:false,message:"expense does not exit"});
           return;
        }
         result=await Expense.destroy({where:{id:id}});
        res.send({success:true,message:"expense is deleted"});
    } catch (error) {
        res.send(error.message);
    }
}