const add = (x, y) => x + y;

const add3 = partial(add, 3);

add3(2) === 5;
