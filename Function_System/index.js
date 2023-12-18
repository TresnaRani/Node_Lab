const fs = require('fs');

//fs.writeFile('demo1.txt',"My name is Tresna",(err) =>{
    //fs.appendFile('demo1.txt',"I am from tmss engg. college",(err) =>{
    fs.readFile('demo1.text','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("data");
    }
})