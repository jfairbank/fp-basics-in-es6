"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function doubleNumbers(numbers) {
  var doubled = [];
  var l = numbers.length;

  for (var i = 0; i < l; i++) {
    var doubledNumber = numbers[i] * 2;
    doubled.push(doubledNumber);
  }

  return doubled;
}

doubleNumbers([1, 2, 3]);
// [2, 4, 6]

exports["default"] = doubleNumbers;
module.exports = exports["default"];