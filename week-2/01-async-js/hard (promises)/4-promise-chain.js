/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

// function wait1(t) {

// }

// function wait2(t) {

// }

// function wait3(t) {

// }

// function calculateTime(t1, t2, t3) {

// }
function wait1(t) {
    const P1 = new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        }, t*1000)
    })

    return P1;

}

function wait2(t) {
    const P2 = new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        }, t*1000)
    })

    return P2;


}

function wait3(t) {
    const P3 = new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        }, t*1000)
    })

    return P3;


}
async function calculateTime(t1, t2, t3) {
    const startTime = Date.now();
    await wait1(t1);
    await wait2(t2);
    await wait3(t3);
    const endTime = Date.now();
    const totalTime = endTime-startTime;
    // console.log(totalTime);
    return totalTime;
}
// console.log(calculateTime(1, 2, 3));
module.exports = calculateTime;
