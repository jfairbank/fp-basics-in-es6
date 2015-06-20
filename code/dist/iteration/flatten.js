"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function flatten(array) {
  if (array.length === 0) {
    return array;
  }

  var _array = _toArray(array);

  var head = _array[0];

  var tail = _array.slice(1);

  if (!Array.isArray(head)) {
    return [head].concat(_toConsumableArray(flatten(tail)));
  }

  return [].concat(_toConsumableArray(flatten(head)), _toConsumableArray(flatten(tail)));
}

exports["default"] = flatten;
module.exports = exports["default"];