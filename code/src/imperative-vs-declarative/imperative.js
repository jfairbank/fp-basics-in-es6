function doubleNumbers(numbers) {
  const doubled = [];
  const l = numbers.length;

  for (let i = 0; i < l; i++) {
    doubled.push(numbers[i] * 2);
  }

  return doubled;
}

doubleNumbers([1, 2, 3]);
// [2, 4, 6]
