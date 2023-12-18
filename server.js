const http = require('http');
const myServer = http.createServer((req,res)=>{
    res.end("This is my first server");
})//.listen(3000);

myServer.listen(3000,()=>{
    console.log("server is running localhost:3000");
});