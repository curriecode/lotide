const assertEqual = require("./assertEqual.js")

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

const eqArrays = function (arr1, arr2) {
  for (let i = 0; i <= arr1.length - 1; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


module.exports = eqArrays;
