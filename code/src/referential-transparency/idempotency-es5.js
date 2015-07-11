var abs = Math.abs;

function identity(x) {
  return x;
}

function add2(n) {
  return n + 2;
}

// Idempotent and referentially transparent
abs(abs(abs(abs(-1)))) === abs(-1);
identity(identity(identity(42))) === identity(42);

// Not idempotent, but referentially transparent
add2(add2(add2(1))) !== add2(1); // 7 !== 3
