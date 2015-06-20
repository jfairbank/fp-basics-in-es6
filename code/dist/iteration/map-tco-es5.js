"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function map(initialArray, fn) {
  function helper(_x, _x2) {
    var _again = true;

    _function: while (_again) {
      var array = _x,
          accum = _x2;
      head = tail = newAccum = undefined;
      _again = false;

      if (array.length === 0) {
        return accum;
      }

      var head = [fn(array[0])];
      var tail = array.slice(1);
      var newAccum = accum.concat(head);

      _x = tail;
      _x2 = newAccum;
      _again = true;
      continue _function;
    }
  }

  return helper(initialArray, []);
}

exports["default"] = map;
module.exports = exports["default"];