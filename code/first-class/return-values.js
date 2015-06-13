// Return a new function that adds a number
// to another
function additionFactory(x) {
  return function(y) {
    return x + y;
  };
}

const add1 = additionFactory(1);

add1(2); // 3
