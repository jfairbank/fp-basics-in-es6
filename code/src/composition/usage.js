import curry from '../currying/curry';
import compose from './compose';
let multiply = curry((x, y) => x * y);
let multiply2 = multiply(2);
let multiply3 = multiply(3);
let multiply6 = compose(multiply2, multiply3);

2 * 3 * 6 === multiply6(6); // 36

let add = curry((x, y) => x + y);
let subtract = curry((y, x) => -y + x);
let add5 = compose(add(6), add(1), subtract(2));

3 - 2 + 6 + 1 === add5(3);      // 8
