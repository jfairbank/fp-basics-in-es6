"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function map(fn, array) {
  if (array.length === 0) {
    return array;
  }

  var _array = _toArray(array);

  var head = _array[0];

  var tail = _array.slice(1);

  return [fn(head)].concat(_toConsumableArray(map(fn, tail)));
}
exports["default"] = map;
module.exports = exports["default"];