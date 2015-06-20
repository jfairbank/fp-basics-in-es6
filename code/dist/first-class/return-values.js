// Return a new function that adds a number
// to another
"use strict";

function additionFactory(x) {
  return function (y) {
    return x + y;
  };
}

var add1 = additionFactory(1);

add1(2); // 3