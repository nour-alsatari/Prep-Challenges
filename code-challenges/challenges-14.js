"use strict";

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

// 1) ---------------------
//
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Ex: "I did my waiting 12 years of it in Azkaban" ==> "Azkaban"
// Ex: "Impossible" ==> "Impossible"
//
// ------------------------

const LastWord = (str) => {
  let array = str.split(" ");
  let lastWord = array.splice(array.lastIndexOf(), 1);
  let laststr = lastWord.toString();
  return laststr;
};

// 2) ---------------------
//
//  Hopefully you struggled in the last code challenge, you can try to do the same task using the split method
//
//  EX: "you dare use my spells against me, potter" ===> "potter"
//
// ------------------------

const LastWord_2 = (str) => {
  let strArray = str.split(" ");
  let lastword = strArray.splice(strArray.lastIndexOf(), 1);
  let laststr = lastword.toString();
  console.log(laststr);
  return laststr;
};

// 3) ---------------------
//
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Ex: "I thought you had a plan" ==> "We thought you had a plan"
// Ex: "I was there 3000 years ago" ==> "We were there 3000 years ago"
// Ex: "I am Venom" ==> "We are Venom"
//
// ------------------------

const replaceWords = (str) => {
  let strArray = str.split(" ");

  strArray.forEach((ele, index) => {
    if (ele == "I") {
      strArray.splice(index, 1, "We");
    } else if (ele == "am") {
      strArray.splice(index, 1, "are");
    } else if (ele == "was") {
      strArray.splice(index, 1, "were");
    }
  });

  return strArray.join(" ");
};

// 4) ---------------------
//
// Write a function that "joins" the array of words together and put a comma "," after every five words
// ["move","it","away","from","the","street"] ==> "move it away from the, street"
//
// ------------------------

const arrToStr = (arr) => {
  arr.forEach((ele, index) => {
    if ((index + 1) % 5 == 0) {
      console.log(ele);
      arr.splice(index, 1, `${ele},`);
    }
  });
  console.log(arr);
  return arr.join(" ");
};

// 5) ---------------------
//
// Simon got a string manipulation question for his interview, it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// "aaaa bbb sdf" ===> "a4 b3 s1d1f1"
//  "door" ==> "d1o2r1"
//
// help him by writing the function
//
// ------------------------

const letterCounter = (str) => {
// couldn't solve it
};

module.exports = {
  LastWord,
  LastWord_2,
  replaceWords,
  arrToStr,
  letterCounter,
};
