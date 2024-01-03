/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
let str ="Able, was I ere I saw Elba!";
function isPalindrome(str) {
  let newstr = str.toLowerCase();
  let stringWithoutSpaces = newstr.replace(/[^\w]/g,'');
  let lengthOfString = stringWithoutSpaces.length;
  if(lengthOfString==0){
    return true;
  }
  let s =0;
  let e = lengthOfString-1;
  while(s<=e){
    if(stringWithoutSpaces[s]==stringWithoutSpaces[e]){
      s++;
      e--;
    }
    else{
      return false;
    }
  }
  return true;
}
module.exports = isPalindrome;
