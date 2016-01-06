const createAdder = (x) => {
  return (y) => x + y;
};

const add3 = createAdder(3);

add3(2) === 5;
add3(3) === 6;
