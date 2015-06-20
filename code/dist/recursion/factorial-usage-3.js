'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _factorial = require('./factorial');

var _factorial2 = _interopRequireDefault(_factorial);

var value = (0, _factorial2['default'])(100000);
console.log(value);
// Infinity