const eqArrays = require("./eqArrays.js");
//outputs a message depending on whether the function passed in evaluates to true or false
const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: is a match`);
  } else {
    console.log(`❌❌❌ Assertion Failed: is no match`);
  }
};


module.exports = assertArraysEqual;

