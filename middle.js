const eqArrays = function (arr1, arr2) {
  for (let i = 0; i <= arr1.length - 1; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  let result = eqArrays(arr1, arr2);
  if (result) {
    console.log(`✅✅✅ Assertion Passed: match is ${result}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: match is ${result}`);
  }
};

const middle = function (arr1) {
  let output = [];
  let arrIsEven = arr1.length % 2 === 0;
  let arrIsOdd = arr1.length % 2 === 1;
  if (arr1.length <= 2) {
    return output;
  } else if (arrIsOdd) {
    let midIndex = Math.floor(arr1.length / 2);
    output.push(arr1[midIndex]);
  } else if (arrIsEven) {
    let midSecondIndex = Math.floor(arr1.length / 2);
    let midFirstIndex = midSecondIndex - 1;
    output = [arr1[midFirstIndex], arr1[midSecondIndex]];
  }
  return output;
}
assertArraysEqual(middle(["1", "2", "middle", "4", "5"]), ["middle"]);
assertArraysEqual(middle(["1", "2", "mid1", "mid2", "5", "6"]), ["mid1", "mid2"]);
assertArraysEqual(middle(["1", "2"]), []);