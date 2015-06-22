"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function reduce(_x, _x2, _x3) {
  var _again = true;

  _function: while (_again) {
    var fn = _x,
        memo = _x2,
        array = _x3;
    _array = head = tail = undefined;
    _again = false;

    if (array.length === 0) {
      return memo;
    }

    var _array = _toArray(array);

    var head = _array[0];

    var tail = _array.slice(1);

    _x = fn;
    _x2 = fn(memo, head);
    _x3 = tail;
    _again = true;
    continue _function;
  }
}

function reduce2(fn, array) {
  var _array2 = _toArray(array);

  var head = _array2[0];

  var tail = _array2.slice(1);

  return reduce(fn, head, tail);
}

exports.reduce = reduce;
exports.reduce2 = reduce2;