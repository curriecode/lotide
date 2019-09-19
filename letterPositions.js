const eqArrays = function (arr1, arr2) {
  for (let i = 0; i <= arr1.length - 1; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: is a match`);
  } else {
    console.log(`❌❌❌ Assertion Failed: is no match`);
  }
};


const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  } return results;
};

assertArraysEqual(letterPositions("lighthouse in the house").o, [6, 19]); //should PASS
assertArraysEqual(letterPositions("lighthouse in the house").l, [0]); //should PASS
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]); //should PASS