const middle = require("../middle.js");
const assert = require('chai').assert;

describe("#middle", () => {
  it("should return the middle element when the array has an odd number of elements", () => {
    assert.deepEqual(middle(["1", "2", "middle", "4", "5"]), ["middle"]);
  });
  it("Should return the 2 middle elements for an array with an even number of elements", () => {
    assert.deepEqual(middle(["1", "2", "mid1", "mid2", "5", "6"]), ["mid1", "mid2"]);
  });
  it("Should return an empy array if there is 2 or less elements on the array", () => {
    assert.deepEqual(middle(["1", "2"]), []);
  });
});