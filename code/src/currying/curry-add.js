const add = x => y => x + y;

function add(x) {
  return function(y) {
    return x + y;
  };
}
