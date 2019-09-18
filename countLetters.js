const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual !== expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual === expected}`);
  }
};
// count letters takes in a string and returns an object with Keys benig the letter and 
//values being how many times it appears in the string

const countLetters = function (str) {
  let result = {};
  let joined = lh.split(" ").join("");
  for (let item of joined) {
    if (result[item]) {
      result[item] += 1;
    } else {
      result[item] = 1;
    }
  }
  return result;
};
let lh = "lighthouse in the house";

const result1 = countLetters(lh, { "l": true, "i": true, "z": true });

assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["z"], undefined);