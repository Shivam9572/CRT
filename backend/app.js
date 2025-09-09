const http=require('http');

const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    if(req.url=='/'){
        res.statusCode=200;
        res.end("<h1>Hello world</h1>");
    }else if(req.url=='/pizza'){
        res.statusCode=200;
        res.end("<h1>This is your pizza</h1>")
    }else if(req.url=='/home'){
        res.statusCode=200;
        res.end("<h1>Welcome Home</h1>")
    }else if(req.url=='/about'){
        res.statusCode=200;
        res.end("<h1>Welcome to about us</h1>")
    }else if(req.url=='/node'){
        res.statusCode=200;
        res.end("<h1>Welcome to my node js project</h1>");
    }else{
        res.statusCode=404;
        res.end("<h1>page not found </h1>");
    }
})
server.listen(3000,()=>{
   console.log("port 3000 is listen");
})