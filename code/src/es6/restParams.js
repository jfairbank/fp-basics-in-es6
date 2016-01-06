const array = (...elements) => {
  return elements;
};

array(1, 2, 3); // [1, 2, 3]

const log = (...args) => {
  console.log(...args);
};

log('hello', 'codemash');
// hello codemash
