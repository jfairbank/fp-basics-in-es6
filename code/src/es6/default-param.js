const greet = (name, greeting = 'Hi') => {
  console.log(greeting, name);
};

greet('Scenic City Summit', 'Hello');
// Hello Scenic City Summit

greet('Chattanooga');
// Hi Chattanooga
