const eqObjects = function (object1, object2) {
  let obj1Key = Object.keys(object1).sort();
  let obj2Key = Object.keys(object2).sort();
  let obj1Val = Object.values(object1).sort();
  let obj2Val = Object.values(object2).sort();
  if (obj1Key.length !== obj2Key.length) {
    return false;
  }

  for (let i = 0; i <= obj1Key.length - 1; i++) {
    if (!(obj1Key.includes(obj2Key[i]))) {
      return false;
    } else if (Array.isArray(obj2Val[i])) {
      if (obj2Val[i].length !== obj1Val[i].length) {
        return false;
      }
      for (let item of obj1Val) {
        if (Array.isArray(item)) {
          for (let value of item) {
            if (!obj2Val[i].includes(value)) {
              return false;
            }
          }
        }
      }
    } else if (!(obj1Val.includes(obj2Val[i]))) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} matches ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} does not match ${inspect(expected)}`);
  }
};

assertObjectsEqual({ a: 1, b: 2 }, { b: 2, a: 1 });
assertObjectsEqual({ a: 2, b: ["1", 2] }, { a: 1, b: 2, });

