import partial from './partial';
function multiply(x, y) {
  return x * y;
}

const doubleNumber = partial(multiply, 2);
const numbers = [1, 2, 3];
const doubledNumbers = numbers.map(doubleNumber);

console.log(doubledNumbers);
// [2, 4, 6]
