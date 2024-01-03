// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs');

function readfile(){
    return new Promise(function(resolve){
        let data = fs.readFile("file.txt", "utf-8", function(err, data){
            resolve(data);
        })
    })
}


async function read(){
    let ans = await readfile();
    console.log(ans);
}


read();



// async function read(){
//     let ans = await fs.readFile("file.txt", "utf-8", function(err, data){
//         console.log(data);
//     })
//     console.log("waiting for the async function to finish");
//     console.log("----------------------------------------");
// }
// read();


