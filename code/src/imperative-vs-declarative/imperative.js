function doubleNumbers(numbers) {
  const doubled = [];
  const l = numbers.length;

  for (let i = 0; i < l; i++) {
    let doubledNumber = numbers[i] * 2;
    doubled.push(doubledNumber);
  }

  return doubled;
}

doubleNumbers([1, 2, 3]);
// [2, 4, 6]

export default doubleNumbers;
