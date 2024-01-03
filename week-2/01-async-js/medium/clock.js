// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)



// const currentDate = new Date();
// console.log("Current Time:", currentDate);
// // Get the current time
// let currentTime = currentDate.toLocaleTimeString();

// console.log("Current Time:", currentTime);
// let HH=0;
// let MM=0;
// let SS=0;

function timer(){
    return new Promise(function(resolve){

    })
}
// function hours(){
//     HH++;
//     if(HH=13){
//         HH=0;
//     }
// }
// function minutes(){
//     MM++;
//     if(MM==60){
//         MM=0;
//         hours();
//     }
// }
// function seconds(){
//     console.log(HH+":"+MM+":"+SS);
//     SS++;
//     if(SS==60){
//         SS=0;
//         minutes();
//     }
// }
// function timer1(){
//     setInterval(seconds, 1000);
// }

// timer1();
let HH = 0;
let MM = 0;
let SS = 0;

function hours() {
    HH++;
    if (HH === 13) {
        HH = 0;
    }
}

function minutes() {
    MM++;
    if (MM === 60) {
        MM = 0;
        hours();
    }
}

function seconds() {
    console.log(`${HH}:${MM}:${SS}`);
    SS++;
    if (SS === 60) {
        SS = 0;
        minutes();
    }
}

function timer1() {
    setInterval(seconds, 1000);
}

timer1();
