function reduce(array, fn, memo) {
  if (array.length === 0) {
    return memo;
  }

  var head = array[0];
  var tail = array.slice(1);
  var newMemo = memo == null ? head : fn(memo, head);

  return reduce(tail, fn, newMemo);
}

export default reduce;
