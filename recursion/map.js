function map(array, fn) {
  if (array.length === 0) {
    return array;
  }

  return [fn(array[0])].concat(map(array.slice(1), fn));
}

export default map;
