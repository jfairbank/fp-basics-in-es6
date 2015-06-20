"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function fibonacci(_x3) {
  var _arguments = arguments;
  var _again = true;

  _function: while (_again) {
    var n = _x3;
    current = next = undefined;
    var current = _arguments[1] === undefined ? 0 : _arguments[1];
    _again = false;
    var next = _arguments[2] === undefined ? 1 : _arguments[2];

    if (n === 0) {
      return current;
    }

    _arguments = [_x3 = n - 1, next, current + next];
    _again = true;
    continue _function;
  }
}

exports["default"] = fibonacci;
module.exports = exports["default"];