/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
  let cleanStr2 = str2.replace(/\s/g, '').toLowerCase();
  console.log(cleanStr1);
  console.log(cleanStr2);
  console.log("-------------------")
  if(cleanStr1.length != cleanStr2.length){
    return false;
  }
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
    while(p3<=cleanStr1.length){
      if(cleanStr1[p1] == cleanStr2[p3]){
        if(p2 == p3){
          p2++;
          p3++;
          p1++;
        }
        else{
          const str2Array = cleanStr2.split('');
          const temp = str2Array[p3];
          str2Array[p3] = str2Array[p2];
          str2Array[p2] = temp;
          cleanStr2 = str2Array.join('');
          console.log(cleanStr2);
          p2++;
          p3=p2;
          p1++;
        }
      }
      else{
        p3++;
      }
    }
    if(cleanStr1 == cleanStr2){
      return true;
    }
    else{
      return false;
    }
}
const ans = isAnagram('Helloo!', '!oolleh');
console.log(ans);
module.exports = isAnagram;
