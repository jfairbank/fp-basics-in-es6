"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function reduceRight(array, fn, memo) {
  if (array.length === 1 && memo == null) {
    return array[0];
  } else if (array.length === 0) {
    return memo;
  }

  var _array = _toArray(array);

  var head = _array[0];

  var tail = _array.slice(1);

  return fn(reduceRight(tail, fn, memo), head);
}

exports["default"] = reduceRight;
module.exports = exports["default"];