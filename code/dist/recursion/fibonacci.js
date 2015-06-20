"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function fibonacci(n) {
  if (n < 2) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

exports["default"] = fibonacci;
module.exports = exports["default"];