function reduce(array, fn, memo) {
  if (array.length === 0) {
    return memo;
  }

  const tail = array.slice(1);
  const newMemo = memo ?
    fn(memo, array[0]) : array[0];

  return reduce(tail, fn, newMemo);
}

export default reduce;
