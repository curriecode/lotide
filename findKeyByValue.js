const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual !== expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual === expected}`);
  }
};

const findKeyByValue = function (obj, value) {
  for (let keyValue in obj) {
    if (obj.hasOwnProperty(keyValue)) {
      if (obj[keyValue] === value) {
        return keyValue
      }
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // should PASS
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), undefined); // should FAIL
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");// should PASS
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy"); //should pass




//Implement the function findKeyByValue which takes in an object and a value. 
//It should scan the object and return the first keyValue which contains the given value. 
//If no keyValue with that given value is found, then it should return undefined.