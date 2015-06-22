'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _partialPartial = require('../partial/partial');

var _partialPartial2 = _interopRequireDefault(_partialPartial);

function curry(fn) {
  var len = arguments[1] === undefined ? fn.length : arguments[1];
  return (function () {
    return function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (args.length >= len) {
        return fn.apply(undefined, args);
      }

      return curry(_partialPartial2['default'].apply(undefined, [fn].concat(args)), len - args.length);
    };
  })();
}

exports['default'] = curry;
module.exports = exports['default'];