// Passing in anonymous functions
'use strict';

myEventLib.on('update', function (data) {
  return console.log(data);
});

function doubleNumber(n) {
  return n * 2;
}

// Earlier example, passing in named function
function doubleNumbers(numbers) {
  return numbers.map(doubleNumber);
}