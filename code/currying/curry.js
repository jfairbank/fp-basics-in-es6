import partial from '../partial/partial';
function curry(fn, len = fn.length) {
  return (...args) => {
    if (args.length === len) {
      return fn(...args);
    }

    return curry(
      partial(fn, ...args),
      len - args.length
    );
  };
}

export default curry;
