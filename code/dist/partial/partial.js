// ES2015 version with arrow functions
// and rest parameters
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function partial(fn) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, otherArgs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      otherArgs[_key2] = arguments[_key2];
    }

    return fn.apply(undefined, args.concat(otherArgs));
  };
}

var placeholder = Object.create(null);

exports["default"] = partial;
var _ = placeholder;
exports._ = _;