function reduceRight(array, fn, memo) {
  if (array.length === 1 && memo == null) {
    return array[0];
  } else if (array.length === 0) {
    return memo;
  }

  const [head, ...tail] = array;

  return fn(reduceRight(tail, fn, memo), head);
}

export default reduceRight;
