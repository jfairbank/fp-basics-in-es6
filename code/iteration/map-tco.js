function map(array, fn, accum = []) {
  if (array.length === 0) {
    return accum;
  }

  const tail = array.slice(1);
  const head = [fn(array[0])];
  const newAccum = accum.concat(head);

  return map(array.slice(1), fn, newAccum);
}

export default map;
