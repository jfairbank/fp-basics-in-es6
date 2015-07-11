var greeting = 'hello';

var n = 42;
n = 5;

var add = function(x, y) {
  return x + y;
};
var printAndReturn = function(string) {
  console.log(string);
  return string;
};

function greet() {
  var g = arguments[0] === undefined ? 'Hi' : arguments[0];
  console.log(g);
}

function print(a) {
  var args = [].slice.call(arguments, 1);
  console.log.apply(console, [a],concat(args));
}

var _ref = ['foo', 'bar', 'baz'];
var x = _ref[0];
var y = _ref.slice(1);
console.log(x);
console.log(y);
