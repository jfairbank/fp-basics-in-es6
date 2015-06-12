function factorial(n) {
  function helper(m, accum) {
    if (m < 2) {
      return accum;
    }

    return helper(m - 1, m * accum);
  }

  return helper(n, 1);
}
