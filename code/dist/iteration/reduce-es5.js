"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function reduce(_x, _x2, _x3) {
  var _again = true;

  _function: while (_again) {
    var array = _x,
        fn = _x2,
        memo = _x3;
    head = tail = newMemo = undefined;
    _again = false;

    if (array.length === 0) {
      return memo;
    }

    var head = array[0];
    var tail = array.slice(1);
    var newMemo = memo == null ? head : fn(memo, head);

    _x = tail;
    _x2 = fn;
    _x3 = newMemo;
    _again = true;
    continue _function;
  }
}

exports["default"] = reduce;
module.exports = exports["default"];