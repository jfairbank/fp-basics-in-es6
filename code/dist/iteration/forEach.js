"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function forEach(fn, array) {
  if (array.length === 0) {
    return array;
  }

  var _array = _toArray(array);

  var head = _array[0];

  var tail = _array.slice(1);

  fn(head);
  forEach(fn, tail);
}
exports["default"] = forEach;
module.exports = exports["default"];