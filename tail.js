// const assertEqual = require('./assertEqual.js');


const tail = (input) => {
  let newArray = [];
  for (let i = 0; i <= input.length; i++) {
    if (input[i] > input[0]) {
      newArray.push(input[i]);
    }
  }
  return newArray;
};



module.exports = tail;