function factorial(n) {
  let result = 1;

  while (n > 1) {
    result *= n--;
  }

  return result;
}

export default factorial;
