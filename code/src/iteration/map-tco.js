function map(fn, array, accum = []) {
  if (array.length === 0) {
    return accum;
  }

  const [head, ...tail] = array;
  const newAccum = [...accum, fn(head)];

  return map(fn, tail, newAccum);
}

export default map;
