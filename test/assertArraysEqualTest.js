const assertArraysEqual = require("../assertArraysEqual.js");

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 2], [1, 2, 3]); // => should NOT PASS