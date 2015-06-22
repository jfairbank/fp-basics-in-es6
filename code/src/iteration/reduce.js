function reduce(fn, memo, array) {
  if (array.length === 0) {
    return memo;
  }

  const [head, ...tail] = array;

  return reduce(fn, fn(memo, head), tail);
}

function reduce2(fn, array) {
  const [head, ...tail] = array;
  return reduce(fn, head, tail);
}

export { reduce, reduce2 };
