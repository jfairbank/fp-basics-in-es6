'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _curryingCurry = require('../currying/curry');

var _curryingCurry2 = _interopRequireDefault(_curryingCurry);

var _compose = require('./compose');

var _compose2 = _interopRequireDefault(_compose);

var multiply = (0, _curryingCurry2['default'])(function (x, y) {
  return x * y;
});
var multiply2 = multiply(2);
var multiply3 = multiply(3);
var multiply6 = (0, _compose2['default'])(multiply2, multiply3);

2 * 3 * 6 === multiply6(6); // 36

var add = (0, _curryingCurry2['default'])(function (x, y) {
  return x + y;
});
var subtract = (0, _curryingCurry2['default'])(function (y, x) {
  return -y + x;
});
var add5 = (0, _compose2['default'])(add(6), add(1), subtract(2));

3 - 2 + 6 + 1 === add5(3); // 8