"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function forEach(fn, array) {
  if (array.length === 0) {
    return array;
  }

  var head = array[0];
  var tail = array.slice(1);

  fn(head);
  forEach(fn, tail);
}
exports["default"] = forEach;
module.exports = exports["default"];