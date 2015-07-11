const greeting = 'hello';

let n = 42;
n = 5;

const add = (x, y) => x + y;

const printAndReturn = (string) => {
  console.log(string);
  return string;
};

function greet(g = 'Hi') {
  console.log(g);
}

function print(a, ...args) {
  console.log(a, ...args);
}

const [x, ...y] = ['foo', 'bar', 'baz'];
console.log(x); // foo
console.log(y); // ['bar', 'baz']
