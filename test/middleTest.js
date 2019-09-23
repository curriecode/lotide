const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle.js");

assertArraysEqual(middle(["1", "2", "middle", "4", "5"]), ["middle"]);
assertArraysEqual(middle(["1", "2", "mid1", "mid2", "5", "6"]), ["mid1", "mid2"]);
assertArraysEqual(middle(["1", "2"]), []);