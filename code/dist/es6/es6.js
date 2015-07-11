'use strict';

var greeting = 'hello';

var n = 42;
n = 5;

var add = function add(x, y) {
  return x + y;
};

var printAndReturn = function printAndReturn(string) {
  console.log(string);
  return string;
};

function greet() {
  var g = arguments[0] === undefined ? 'Hi' : arguments[0];

  console.log(g);
}

function print(a) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  console.log.apply(console, [a].concat(args));
}

var x = 'foo';
var y = ['bar', 'baz'];

console.log(x); // foo
console.log(y); // ['bar', 'baz']