function map(array, fn, accum = []) {
  if (array.length === 0) {
    return accum;
  }

  const [head, ...tail] = array;
  const newAccum = [...accum, fn(head)];

  return map(tail, fn, newAccum);
}

export default map;
