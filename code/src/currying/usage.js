import curry from './curry';
const add = curry((x, y, z) => x + y + z);

// All arguments supplied, normal invocation.
add(1, 2, 3); // 6

// Supply arguments one at a time. Final argument
// induces invocation.
add(1)(2)(3); // 6

// Equivalent to previous example.
let add1 = add(1);
let add3 = add1(2);
add3(3); // 6

// Supply more than one argument at a time.
add(1, 2)(3); // 6
add(1)(2, 3); // 6
