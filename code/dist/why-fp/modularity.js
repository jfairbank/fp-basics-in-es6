'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _curryingCurry = require('../currying/curry');

var _curryingCurry2 = _interopRequireDefault(_curryingCurry);

var _compositionCompose = require('../composition/compose');

var _compositionCompose2 = _interopRequireDefault(_compositionCompose);

var _iterationMap = require('../iteration/map');

var _iterationMap2 = _interopRequireDefault(_iterationMap);

var add = (0, _curryingCurry2['default'])(function (x, y) {
  return x + y;
});
var flip = function flip(x) {
  return ~x;
};
var negate = (0, _compositionCompose2['default'])(add(1), flip);

var minus = (0, _curryingCurry2['default'])(function (x, y) {
  return add(x, negate(y));
});

var multiply = (0, _curryingCurry2['default'])(function multiply(x, y) {
  var accum = arguments[2] === undefined ? y : arguments[2];
  return (function () {
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return accum;
    }
    return multiply(minus(x, 1), y, add(accum, y));
  })();
});

var power = (0, _curryingCurry2['default'])(function power(x, y) {
  var accum = arguments[2] === undefined ? y : arguments[2];
  return (function () {
    if (x === 0) {
      return 1;
    }
    if (x === 1) {
      return accum;
    }
    return power(minus(x, 1), y, multiply(accum, y));
  })();
});

var curriedMap = (0, _curryingCurry2['default'])(_iterationMap2['default']);

var squareAndDouble = curriedMap((0, _compositionCompose2['default'])(multiply(2), power(2)));

var numbers = [1, 2, 3];

console.log(squareAndDouble(numbers));
// [2, 8, 18]