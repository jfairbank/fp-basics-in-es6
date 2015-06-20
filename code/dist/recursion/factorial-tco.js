"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function factorial(_x2) {
  var _arguments = arguments;
  var _again = true;

  _function: while (_again) {
    var n = _x2;
    accum = undefined;
    _again = false;
    var accum = _arguments[1] === undefined ? 1 : _arguments[1];

    if (n < 2) {
      return accum;
    }

    _arguments = [_x2 = n - 1, n * accum];
    _again = true;
    continue _function;
  }
}

exports["default"] = factorial;
module.exports = exports["default"];