function fibonacci(n) {
  function helper(m, current, next) {
    if (m === 0) {
      return current;
    }

    return helper(m - 1, next, current + next);
  }

  return helper(n, 0, 1);
}
