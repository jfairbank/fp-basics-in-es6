function doubleNumber(n) {
  return n * 2;
}

function doubleNumbers(numbers) {
  return numbers.map(doubleNumber);
}

doubleNumbers([1, 2, 3]);
// [2, 4, 6]

export default doubleNumbers;
