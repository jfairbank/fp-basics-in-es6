import reduceRight from '../iteration/reduceRight';
function compose(...fns) {
  return (...args) => {
    const result = reduceRight(fns, (memo, fn) => {
      return [fn(...memo)];
    }, args);

    return result[0];
  };
}

export default compose;
