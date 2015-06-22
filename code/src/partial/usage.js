// Before we would use this
function additionFactory(x) {
  return (y) => x + y;
}

let add1 = additionFactory(1);
add1(2); // 3

// Now we can write an add function
// and use partial application
function add(x, y) {
  return x + y;
}

// Partial application with native `bind` function
add1 = add.bind(null, 1);
add1(2); // 3

// Use a custom-written `partial` function
add1 = partial(add, 1);
add1(2); // 3
