const fs = require('fs');

fs.writeFile('demo1.txt',"My name is Tresna",(err) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log("successful");
    }
})