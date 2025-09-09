const http=require('http');
const routesHandler=require('./routes.js');
console.log(routesHandler.testFunction);
const server=http.createServer(routesHandler.routes)
server.listen(3000,()=>{
   console.log("port 3000 is listen");
})