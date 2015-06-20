'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reduce = require('./reduce');

var _reduce2 = _interopRequireDefault(_reduce);

function map(array, fn) {
  return (0, _reduce2['default'])(array, function (newArray, item) {
    var newItem = fn(item);
    return newArray.concat([newItem]);
  }, []);
}

exports['default'] = map;
module.exports = exports['default'];