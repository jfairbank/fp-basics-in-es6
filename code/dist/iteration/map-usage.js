'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _map = require('./map');

var _map2 = _interopRequireDefault(_map);

function square(n) {
  return n * n;
}

var numbers = [1, 2, 3];
var squaredNumbers = (0, _map2['default'])(square, numbers);
// [1, 4, 9];