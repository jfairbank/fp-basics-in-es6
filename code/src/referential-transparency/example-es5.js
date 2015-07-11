function doubleNumber(n) {
  return n * 2;
}

function square(n) {
  return n * n;
}

function add6(n) {
  return n + 6;
}

// Reduces down to the same value
var value1 = add6(square(doubleNumber(3))); // 42
var value2 = add6(square(6));               // 42
var value3 = add6(36);                      // 42
var value4 = 42;

// Same value for every call
var otherValue1 = doubleNumber(3) + doubleNumber(3) +
                  doubleNumber(3) + doubleNumber(3);

var otherValue2 = 6 + 6 + 6 + 6;
