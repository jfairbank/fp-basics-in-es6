'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _partial = require('./partial');

var _partial2 = _interopRequireDefault(_partial);

var _iterationMap = require('../iteration/map');

var _iterationMap2 = _interopRequireDefault(_iterationMap);

function multiply(x, y) {
  return x * y;
}

var doubleNumber = (0, _partial2['default'])(multiply, 2);
var numbers = [1, 2, 3];
var doubledNumbers = (0, _iterationMap2['default'])(doubleNumber, numbers);

console.log(doubledNumbers);
// [2, 4, 6]