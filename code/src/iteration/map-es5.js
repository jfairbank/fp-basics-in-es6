function map(array, fn) {
  if (array.length === 0) {
    return array;
  }

  var head = [fn(array[0])];
  var tail = array.slice(1);

  return head.concat(map(tail, fn));
}

export default map;
