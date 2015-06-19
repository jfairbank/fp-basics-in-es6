// ES5 Version
function partial(fn) {
  var args = [].slice.call(arguments, 1);

  return function() {
    var otherArgs = [].slice.call(arguments);
    return fn.apply(null, args.concat(otherArgs));
  };
}

export default partial;
