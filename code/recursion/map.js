function map(array, fn) {
  if (array.length === 0) {
    return array;
  }

  const head = [fn(array[0])];
  const tail = array.slice(1);

  return head.concat(map(tail, fn));
}

export default map;
