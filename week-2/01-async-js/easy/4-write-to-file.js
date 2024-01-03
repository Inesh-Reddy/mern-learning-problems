// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.



const fs = require('fs');

//adding text to a file????

async function write(){
    let ans  = await fs.writeFile("file.txt", "Hello world!!", function(err, data){
        console.log("done");
    })
}

write();
function reading(){
    return new Promise(function(resolve){
        fs.readFile("file.txt", "utf-8", function(err, data){
            resolve(data);
        })
    })
}
async function read(){
    let ans  = await reading()
    console.log("reading the new text: " + ans);
    
}
read();