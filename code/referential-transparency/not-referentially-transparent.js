let counter = 0;

function addToCounter1(n) {
  counter++;
  return n + counter;
}

function addToCounter2(n) {
  let counter = 0;
  counter++;
  return n + counter;
}

// Not referentially transparent
let value1 = addToCounter1(1) + addToCounter1(1); // 5
let value2 = 2 + 3; // Not the same value every call!

// Referentially transparent
let otherValue1 = addToCounter2(1) + addToCounter2(1); // 4
let otherValue2 = 2 + 2;
