"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function map(_x2, _x3) {
  var _arguments = arguments;
  var _again = true;

  _function: while (_again) {
    var fn = _x2,
        array = _x3;
    accum = _array = head = tail = newAccum = undefined;
    _again = false;
    var accum = _arguments[2] === undefined ? [] : _arguments[2];

    if (array.length === 0) {
      return accum;
    }

    var _array = _toArray(array);

    var head = _array[0];

    var tail = _array.slice(1);

    var newAccum = [].concat(_toConsumableArray(accum), [fn(head)]);

    _arguments = [_x2 = fn, _x3 = tail, newAccum];
    _again = true;
    continue _function;
  }
}

exports["default"] = map;
module.exports = exports["default"];