"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function factorial(n) {
  if (n < 2) {
    return 1;
  }

  return n * factorial(n - 1);
}

exports["default"] = factorial;
module.exports = exports["default"];