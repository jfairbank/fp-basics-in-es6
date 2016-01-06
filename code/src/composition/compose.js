const compose = (...fns) => (...args) => {
  if (fns.length === 0) {
    return args[0];
  }

  const last = fns[fns.length - 1];
  const rest = fns.slice(0, -1);

  return rest.reduceRight((memo, fn) => {
    return fn(memo);
  }, last(...args));
};

export default compose;
