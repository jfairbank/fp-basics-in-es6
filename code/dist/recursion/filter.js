"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function filter(_x, _x2) {
  var _again = true;

  _function: while (_again) {
    var array = _x,
        fn = _x2;
    keep = tail = head = undefined;
    _again = false;

    if (array.length === 0) {
      return array;
    }

    var keep = fn(array[0]);
    var tail = array.slice(1);

    if (keep) {
      var head = [array[0]];
      return head.concat(filter(tail, fn));
    }

    _x = tail;
    _x2 = fn;
    _again = true;
    continue _function;
  }
}

//import reduce from './reduce';

//function filter(array, fn) {
//  return reduce(array, (newArray, item) => {
//    if (fn(item)) {
//      return newArray.concat([item]);
//    }

//    return newArray;
//  }, []);
//}

exports["default"] = filter;
module.exports = exports["default"];