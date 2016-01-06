const factorial = (n) => {
  let result = 1;

  while (n > 1) {
    result *= n;
    n--;
  }

  return result;
};

export default factorial;
