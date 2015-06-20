"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function doubleNumber(n) {
  return n * 2;
}

function doubleNumbers(numbers) {
  return numbers.map(doubleNumber);
}

doubleNumbers([1, 2, 3]);
// [2, 4, 6]

exports["default"] = doubleNumbers;
module.exports = exports["default"];