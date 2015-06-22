'use strict';

var _reduce = require('./reduce');

function add(x, y) {
  return x + y;
}

function concat(string1, string2) {
  return string1 + ':' + string2;
}

var numbers = [1, 2, 3];
var sum1 = (0, _reduce.reduce)(add, 0, numbers); // 6
var sum2 = (0, _reduce.reduce2)(add, numbers); // 6

var pets = ['dog', 'cat', 'hamster'];
var joinedPets = (0, _reduce.reduce2)(concat, pets);
// 'dog:cat:hamster'