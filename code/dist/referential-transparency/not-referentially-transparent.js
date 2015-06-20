"use strict";

var counter = 0;

function addToCounter1(n) {
  counter++;
  return n + counter;
}

function addToCounter2(n) {
  var counter = 0;
  counter++;
  return n + counter;
}

// Not referentially transparent
var value1 = addToCounter1(1) + addToCounter1(1); // 5
var value2 = 2 + 3; // Not the same value every call!

// Referentially transparent
var otherValue1 = addToCounter2(1) + addToCounter2(1); // 4
var otherValue2 = 2 + 2;