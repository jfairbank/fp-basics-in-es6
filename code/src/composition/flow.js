import reduce from '../iteration/reduce';
function flow(...fns) {
  return (...args) => {
    const result = reduce(fns, (memo, fn) => {
      return [fn(...memo)];
    }, args);

    return result[0];
  };
}

export default flow;
