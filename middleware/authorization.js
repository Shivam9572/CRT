const jwt=require("jsonwebtoken");

module.exports.authorization=(req,res,next)=>{
 console.log(req.headers.authorization);
    jwt.verify(req.headers.authorization,"secretkey",function(err,result){
        if(err){
            res.send(err.message);
            return;
        }
        req.userId=result.userId;
        next()
    });
    
}
