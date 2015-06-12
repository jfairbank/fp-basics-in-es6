function factorial(n, accum = 1) {
  if (n < 2) {
    return accum;
  }

  return factorial(n - 1, n * accum);
}

export default factorial;
