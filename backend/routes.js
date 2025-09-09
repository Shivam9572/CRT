const fs=require('fs');
let routesHandler=(req,res)=>{
    
    res.setHeader('Content-Type','text/html');
    if(req.url=="/"){
        res.statusCode=302;
        res.end(`<form method='post' action='/message'>
               <label id='username'>username:</label>
               <input type='text' name='username' id='username'>
               <button type='submit'>Add</button>
               </button>`);
    }else{
        if(req.url=='/message'){
            res.setHeader('Content-Type','text/html');
             let dataChunks=[];
             req.on('data',(chunks)=>{
               dataChunks.push(chunks);
             });
             req.on('end',()=>{
                fs.writeFileSync("file.text",dataChunks.toString().split('=')[1]);
                res.end("add data in file");
             });

        }
        else if(req.url=='/read'){
            res.end(`<h1>${fs.readFileSync('file.text',(error,data)=>{
                if(error){
                    res.end("error");
                }
                res.end(`<h1>${data}</html>`);
            })}`)
        }
    }
}
function anotherFun(){
    console.log("the another function");
}
module.exports={routesHandler,anotherFun};
module.exports.routes=routesHandler;
module.exports.anotherFun=anotherFun;
module.exports={
    routes:routesHandler,
    testFunction:anotherFun
}
