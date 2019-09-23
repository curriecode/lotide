const middle = function (arr1) {
  let output = [];
  let arrIsEven = arr1.length % 2 === 0;
  let arrIsOdd = arr1.length % 2 === 1;
  if (arr1.length <= 2) {
    return output;
  } else if (arrIsOdd) {
    let midIndex = Math.floor(arr1.length / 2);
    output.push(arr1[midIndex]);
  } else if (arrIsEven) {
    let midSecondIndex = Math.floor(arr1.length / 2);
    let midFirstIndex = midSecondIndex - 1;
    output = [arr1[midFirstIndex], arr1[midSecondIndex]];
  }
  return output;
};

module.exports = middle;
