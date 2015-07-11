import partial from './partial';
import map from '../iteration/map';
function multiply(x, y) {
  return x * y;
}

const doubleNumber = partial(multiply, 2);
const numbers = [1, 2, 3];
const doubledNumbers = map(doubleNumber, numbers);

console.log(doubledNumbers);
// [2, 4, 6]
