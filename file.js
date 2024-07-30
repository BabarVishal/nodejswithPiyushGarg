const fs = require("fs");

//Sync......
fs.writeFileSync("./text.txt", "Hy Vishal babar");

//Async.....
fs.writeFile("./text2.txt", "hy Vishal babar", (err) => {console.log(err)})

//Sync...
const result = fs.readFileSync("./Contact.txt", "utf-8")
console.log(result);

//Asyn.....
fs.readFile("./deta.txt", "utf-8", (err, result) =>{
    if(err){
        console.log(err);
    }else{
        console.log(result);
    }
})