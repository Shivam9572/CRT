let sendErrorResponse=(res,err)=>{
    return res.status(err.statusCode).json({
        success:"false",
        message:err.message
    }
    );
}
let sendResponse=(res,data,statusCode)=>{
    return res.status(statusCode).json({
        success:"true",
        message:data
    }
    );
}
module.exports={sendErrorResponse,sendResponse};