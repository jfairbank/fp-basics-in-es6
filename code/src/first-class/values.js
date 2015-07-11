// Function declaration
function add(x, y) {
  return x + y;
}

// Assign to a variable
const addAlias = add;

// Assign an anonymous function expression
const multiply = (x, y) => x * y;

// Functions have properties
console.log(add.name);      // 'add'
console.log(addAlias.name); // 'add'
console.log(multiply.name); // ''
