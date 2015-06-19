import partial from '../partial/partial';
function curry(fn, len) {
  if (len == null) {
    len = fn.length;
  }

  return function() {
    var args = [].slice.call(arguments);

    if (args.length === len) {
      return fn.apply(null, args);
    }

    var newFn = partial.apply(null, [fn].concat(args));

    return curry(newFn, len - args.length);
  };
}

export default curry;
