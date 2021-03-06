const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: is not a match`);
  } else {
    console.log(`✅✅✅ Assertion Passed: is a match`);
  }
};

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



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false