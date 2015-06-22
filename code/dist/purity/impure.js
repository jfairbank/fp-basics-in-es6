'use strict';

var myName = 'Jeremy';

var myHobbies = ['programming', 'reading', 'playing guitar'];

function getName() {
  return myName;
}

function printName(name) {
  console.log(name);
}

function add(x, y) {
  myName = 'Joe';
  return x + y;
}

function hobbiesMapper(hobbies) {
  return function (fn) {
    return hobbies.map(fn);
  };
}