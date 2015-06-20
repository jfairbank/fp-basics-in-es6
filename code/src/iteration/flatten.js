function flatten(array) {
  if (array.length === 0) {
    return array;
  }

  const [head, ...tail] = array;

  if (!Array.isArray(head)) {
    return [head, ...flatten(tail)];
  }

  return [...flatten(head), ...flatten(tail)];
}

export default flatten;
