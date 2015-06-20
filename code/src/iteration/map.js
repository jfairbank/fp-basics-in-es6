function map(array, fn) {
  if (array.length === 0) {
    return array;
  }

  const [head, ...tail] = array;

  return [fn(head), ...map(tail, fn)];
}

export default map;
