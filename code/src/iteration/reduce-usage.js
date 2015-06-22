import { reduce, reduce2 } from './reduce';
function add(x, y) {
  return x + y;
}

function concat(string1, string2) {
  return string1 + ':' + string2;
}

let numbers = [1, 2, 3];
let sum1 = reduce(add, 0, numbers); // 6
let sum2 = reduce2(add, numbers);   // 6

let pets = ['dog', 'cat', 'hamster'];
let joinedPets = reduce2(concat, pets);
// 'dog:cat:hamster'
