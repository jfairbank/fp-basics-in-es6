function forEach(fn, array) {
  if (array.length === 0) {
    return array;
  }

  const [head, ...tail] = array;

  fn(head);
  forEach(fn, tail);
}
export default forEach;
