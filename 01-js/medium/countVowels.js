/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
// let str = "rhythm"
function countVowels(inputstr) {
  // Your code here
  let count=0;
  let newstr = inputstr.toLowerCase();
  for(let i=0; i<newstr.length; i++){
    if(newstr[i]=='a'||newstr[i]=='e'||newstr[i]=='i'||newstr[i]=='o'||newstr[i]=='u'){
      count = count+1;
    }
  }
  return count;
}
// console.log(countVowels(str));
module.exports = countVowels;