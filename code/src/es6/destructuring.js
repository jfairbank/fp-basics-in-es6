const langs = ['JavaScript', 'Ruby', 'Haskell'];
const [js, ...rest] = langs;

js === 'JavaScript';
rest[0] === 'Ruby';
rest[1] === 'Haskell';

const head = ([x]) => x;

head([1, 2, 3]) === 1;
