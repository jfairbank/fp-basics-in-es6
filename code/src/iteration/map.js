function map(fn, array) {
  if (array.length === 0) {
    return array;
  }

  const [head, ...tail] = array;

  return [fn(head), ...map(fn, tail)];
}
export default map;
