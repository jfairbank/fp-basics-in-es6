// Function declaration
function add(x, y) {
  return x + y;
}

// Assign to a variable
let addAlias = add;

// Assign an anonymous function expression
let multiply = function(x, y) {
  return x * y;
};

// Functions have properties
console.log(add.name);      // 'add'
console.log(addAlias.name); // 'add'
console.log(multiply.name); // ''
