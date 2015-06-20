'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _iterationReduce = require('../iteration/reduce');

var _iterationReduce2 = _interopRequireDefault(_iterationReduce);

var placeholder = Object.create(null);

function partial(fn) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, otherArgs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      otherArgs[_key2] = arguments[_key2];
    }

    var newArgs = (0, _iterationReduce2['default'])(args, function (memo, arg) {
      if (arg === placeholder) {
        return [memo[0].concat(memo[1].slice(0, 1)), memo[1].slice(1)];
      }

      return [memo[0].concat([arg]), memo[1]];
    }, [[], otherArgs]);

    var argsToPass = [].concat(_toConsumableArray(newArgs[0]), _toConsumableArray(newArgs[1]));

    return fn.apply(undefined, _toConsumableArray(argsToPass));
  };
}

exports['default'] = partial;
var _ = placeholder;
exports._ = _;