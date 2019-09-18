//comparesd the values of 2 arrays
const eqArrays = function (arr1, arr2) {
  for (let i = 0; i <= arr1.length - 1; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
//outputs a message depending on whether the function passed in evaluates to true or false
const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: is a match`);
  } else {
    console.log(`❌❌❌ Assertion Failed: is no match`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 2], [1, 2, 3]); // => should NOT PASS

