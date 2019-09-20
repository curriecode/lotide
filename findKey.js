const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual !== expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual === expected}`);
  }
};


const findKey = (obj, cb) => {
  for (let key in obj) {
    if (cb(obj[key]) === true) {
      return key;
    }
  }
  return undefined
}


assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2), "noma");