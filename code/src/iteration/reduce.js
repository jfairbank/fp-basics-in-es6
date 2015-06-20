function reduce(array, fn, memo) {
  if (array.length === 0) {
    return memo;
  }

  const [head, ...tail] = array;
  const newMemo = memo == null ? head : fn(memo, head);

  return reduce(tail, fn, newMemo);
}

export default reduce;
