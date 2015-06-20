'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _partialPartial = require('../partial/partial');

var _partialPartial2 = _interopRequireDefault(_partialPartial);

function curry(fn, len) {
  if (len == null) {
    len = fn.length;
  }

  return function () {
    var args = [].slice.call(arguments);

    if (args.length === len) {
      return fn.apply(null, args);
    }

    var newFn = _partialPartial2['default'].apply(null, [fn].concat(args));

    return curry(newFn, len - args.length);
  };
}

exports['default'] = curry;
module.exports = exports['default'];