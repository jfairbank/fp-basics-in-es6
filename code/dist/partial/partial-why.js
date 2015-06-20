'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _partial = require('./partial');

var _partial2 = _interopRequireDefault(_partial);

function multiply(x, y) {
  return x * y;
}

var doubleNumber = (0, _partial2['default'])(multiply, 2);
var numbers = [1, 2, 3];
var doubledNumbers = numbers.map(doubleNumber);

console.log(doubledNumbers);
// [2, 4, 6]