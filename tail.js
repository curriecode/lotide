const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual  !==  expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual === expected}`);
  }
};


const tail = (input) => {
  let newArray = [];
  for (let i = 0; i <= input.length; i++) {
    if (input[i] > input[0]) {
      newArray.push(input[i]);
    }
  }
  return newArray;
};



// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!