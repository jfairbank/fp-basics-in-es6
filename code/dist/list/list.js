'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); }

var Nil = _defineProperty({
  each: function each() {
    return this;
  },

  map: function map() {
    return this;
  },

  reduce: function reduce(fn, memo) {
    return memo;
  },

  reduceRight: function reduceRight(fn, memo) {
    return memo;
  },

  concat: function concat() {
    return this;
  },

  toString: function toString() {
    return 'Nil';
  }

}, Symbol.iterator, regeneratorRuntime.mark(function callee$0$0() {
  return regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
      case 'end':
        return context$1$0.stop();
    }
  }, callee$0$0, this);
}));

var List = _defineProperty({
  each: function each(fn) {
    fn(this.head);
    return this.tail.each(fn);
  },

  map: function map(fn) {
    //return cons(fn(this.head), this.tail.map(fn));
    return this.reduceRight(function (list, item) {
      return cons(fn(item), list);
    }, Nil);
  },

  reduce: function reduce(fn, memo) {
    var newMemo = memo == null ? this.head : fn(memo, this.head);
    return this.tail.reduce(fn, newMemo);
  },

  reduceRight: function reduceRight(fn, memo) {
    var newMemo = this.tail.reduceRight(fn, memo);

    if (newMemo == null) {
      return this.head;
    }

    return fn(newMemo, this.head);
  },

  concat: function concat(otherList) {
    return this.reduceRight(function (list, item) {
      return cons(item, list);
    }, otherList);
  },

  toString: function toString() {
    var items = this.reduce(function (last, current) {
      return '' + last + ', ' + current;
    });
    return 'List(' + items + ')';
  },

  toArray: function toArray() {
    return [].concat(_toConsumableArray(this));
  }

}, Symbol.iterator, regeneratorRuntime.mark(function callee$0$0() {
  return regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return this.head;

      case 2:
        return context$1$0.delegateYield(this.tail[Symbol.iterator](), 't0', 3);

      case 3:
      case 'end':
        return context$1$0.stop();
    }
  }, callee$0$0, this);
}));

function makeList() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  if (values.length === 0) {
    return Nil;
  }

  var head = values[0];
  var tail = values.slice(1);

  return cons(head, makeList.apply(undefined, _toConsumableArray(tail)));
}

function cons(head, tail) {
  var list = Object.create(List);
  list.head = head;
  list.tail = tail;
  return list;
}

exports.Nil = Nil;
exports.cons = cons;
exports.List = makeList;

//yield *this.eachGen();