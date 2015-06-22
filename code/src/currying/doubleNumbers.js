import curry from './curry';
import map from '../iteration/map-tco';
let curriedMap = curry(map);
let multiply = curry((x, y) => x * y);
let doubleNumbers = curriedMap(multiply(2));
let numbers = [1, 2, 3];

console.log(doubleNumbers(numbers));
// [2, 4, 6]
