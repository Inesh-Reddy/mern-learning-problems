const fs = require('fs');


function read(){
    return new Promise(function(resolve){
        fs.readFile("file.txt", "utf-8", function(err, data){
            resolve(data);
        })
    })
}
function writeBack(result){
    return new Promise(function(resolve){
        fs.writeFile("file.txt", result, function(err, data){
            resolve(data);
            console.log("Done");
        })
    })
}

async function trimAndWrite(){
    let data = await read();
    let result = data.replace(/\s+/g, ' ');
    await writeBack(result);
}


trimAndWrite();