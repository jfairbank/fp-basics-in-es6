'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

var add = (0, _curry2['default'])(function (x, y, z) {
  return x + y + z;
});

// All arguments supplied, normal invocation.
add(1, 2, 3); // 6

// Supply arguments one at a time. Final argument
// induces invocation.
add(1)(2)(3); // 6

// Equivalent to previous example.
var add1 = add(1);
var add3 = add1(2);
add3(3); // 6

// Supply more than one argument at a time.
add(1, 2)(3); // 6
add(1)(2, 3); // 6