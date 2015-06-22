import map from './map';
function square(n) {
  return n * n;
}

let numbers = [1, 2, 3];
let squaredNumbers = map(square, numbers);
// [1, 4, 9];
