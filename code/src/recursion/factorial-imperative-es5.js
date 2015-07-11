function factorial(n) {
  var result = 1;

  while (n > 1) {
    result *= n--;
  }

  return result;
}

export default factorial;
