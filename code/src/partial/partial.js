const partialFromBind = (fn, ...args) => {
  return fn.bind(null, ...args);
};

const partial = (fn, ...args) => {
  return (...otherArgs) => {
    return fn(...args, ...otherArgs)
  };
};
