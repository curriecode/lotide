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

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const words = ["ground", "control", "to", "major", "tom"];

const beepBoop = map(words, (word) => {
  if (word.length < 6) {
    word = "beep";
  } else {
    word = "boop";
  }
  return word;
});
console.log(beepBoop);

const getLengthOfWords = map(words, word => word.length);
console.log(getLengthOfWords);

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(getLengthOfWords, [6, 7, 2, 5, 3]);
assertArraysEqual(beepBoop, ['boop', 'boop', 'beep', 'beep', 'beep']);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);