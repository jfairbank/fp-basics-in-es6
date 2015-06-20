"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function factorial(n) {
  var result = 1;

  while (n > 1) {
    result *= n--;
  }

  return result;
}

exports["default"] = factorial;
module.exports = exports["default"];