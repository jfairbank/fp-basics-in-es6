// ES5 Version
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function partial(fn) {
  var args = [].slice.call(arguments, 1);

  return function () {
    var otherArgs = [].slice.call(arguments);
    return fn.apply(null, args.concat(otherArgs));
  };
}

exports["default"] = partial;
module.exports = exports["default"];