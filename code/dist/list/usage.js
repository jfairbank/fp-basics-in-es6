'use strict';

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _list = require('./list');

var list1 = (0, _list.List)(1, 2, 3);
var list2 = (0, _list.List)(42, 13, 20);
var list3 = list1.concat(list2);
var list4 = _list.List.apply(undefined, _toConsumableArray(list1).concat(_toConsumableArray(list2)));
var list5 = list1.concat(_list.Nil);
var array1 = Array.from(list3);

var _list4 = _toArray(list4);

var array2 = _list4;

var array3 = list3.toArray();

console.log(list1.toString());
console.log(list2.toString());
console.log(list3.toString());
console.log(list4.toString());
console.log(list5.toString());
console.log(array1);
console.log(array2);
console.log(array3);

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = list3[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var item = _step.value;

    console.log('item =', item);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator['return']) {
      _iterator['return']();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}