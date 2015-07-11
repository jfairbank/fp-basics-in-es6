function compose(...fns) {
  return (...args) => {
    const result = fns.reduceRight((memo, fn) => {
      return [fn(...memo)];
    }, args);

    return result[0];
  };
}

export default compose;
