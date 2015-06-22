"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function compose(f, g) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return f(g.apply(undefined, args));
  };
}
exports["default"] = compose;
module.exports = exports["default"];