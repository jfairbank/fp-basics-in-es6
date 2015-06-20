function map(initialArray, fn) {
  function helper(array, accum) {
    if (array.length === 0) {
      return accum;
    }

    var head = [fn(array[0])];
    var tail = array.slice(1);
    var newAccum = accum.concat(head);

    return helper(tail, newAccum);
  }

  return helper(initialArray, []);
}

export default map;
