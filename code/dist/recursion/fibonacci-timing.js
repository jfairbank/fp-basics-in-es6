//import fibonacci from './fibonacci';
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fibonacciTco = require('./fibonacci-tco');

var _fibonacciTco2 = _interopRequireDefault(_fibonacciTco);

var N = 1000;

function times(n, fn) {
  while (n--) fn();
}

function time(name, fn) {
  console.time(name);
  //times(N, fn);
  fn();
  console.timeEnd(name);
}

time('fibonacci(1)', function () {
  return (0, _fibonacciTco2['default'])(1);
});
time('fibonacci(5)', function () {
  return (0, _fibonacciTco2['default'])(5);
});
time('fibonacci(20)', function () {
  return (0, _fibonacciTco2['default'])(20);
});
time('fibonacci(30)', function () {
  return (0, _fibonacciTco2['default'])(30);
});
time('fibonacci(35)', function () {
  return (0, _fibonacciTco2['default'])(35);
});
time('fibonacci(40)', function () {
  return (0, _fibonacciTco2['default'])(40);
});
time('fibonacci(45)', function () {
  return (0, _fibonacciTco2['default'])(45);
});
time('fibonacci(100)', function () {
  return (0, _fibonacciTco2['default'])(100);
});