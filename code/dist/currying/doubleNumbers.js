'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

var _iterationMapTco = require('../iteration/map-tco');

var _iterationMapTco2 = _interopRequireDefault(_iterationMapTco);

var curriedMap = (0, _curry2['default'])(_iterationMapTco2['default']);
var multiply = (0, _curry2['default'])(function (x, y) {
  return x * y;
});
var doubleNumbers = curriedMap(multiply(2));
var numbers = [1, 2, 3];

console.log(doubleNumbers(numbers));
// [2, 4, 6]