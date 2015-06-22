import curry from '../currying/curry';
import compose from '../composition/compose';
import map from '../iteration/map';
let add = curry((x, y) => x + y);
let flip = (x) => ~x;
let negate = compose(add(1), flip);

let minus = curry((x, y) => add(x, negate(y)));

let multiply = curry(function multiply(x, y, accum = y) {
  if (x === 0) { return 0; }
  if (x === 1) { return accum; }
  return multiply(minus(x, 1), y, add(accum, y));
});

let power = curry(function power(x, y, accum = y) {
  if (x === 0) { return 1; }
  if (x === 1) { return accum; }
  return power(minus(x, 1), y, multiply(accum, y));
});

let curriedMap = curry(map);

let squareAndDouble = curriedMap(compose(multiply(2), power(2)));

let numbers = [1, 2, 3];

console.log(squareAndDouble(numbers));
// [2, 8, 18]
