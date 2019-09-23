// const assertEqual = require('./assertEqual.js');

const tail = (input) => {
  let newArr = input;
  return newArr.slice(1);
};
tail(["Yo Yo", "Lighthouse", "Labs"]);


module.exports = tail;