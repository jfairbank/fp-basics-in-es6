const greet = (name, greeting = 'Hi') => {
  console.log(greeting, name);
};

greet('Codemash', 'Hello');
// Hello Codemash

greet('Sandusky');
// Hi Sandusky
