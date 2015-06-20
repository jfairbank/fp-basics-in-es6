const Nil = {
  each() {
    return this;
  },

  map() {
    return this;
  },

  reduce(fn, memo) {
    return memo;
  },

  reduceRight(fn, memo) {
    return memo;
  },

  concat() {
    return this;
  },

  toString() {
    return 'Nil';
  },

  *[Symbol.iterator]() {}
};

const List = {
  each(fn) {
    fn(this.head);
    return this.tail.each(fn);
  },

  map(fn) {
    //return cons(fn(this.head), this.tail.map(fn));
    return this.reduceRight((list, item) => cons(fn(item), list), Nil);
  },

  reduce(fn, memo) {
    const newMemo = memo == null ? this.head : fn(memo, this.head);
    return this.tail.reduce(fn, newMemo);
  },

  reduceRight(fn, memo) {
    const newMemo = this.tail.reduceRight(fn, memo);

    if (newMemo == null) {
      return this.head;
    }

    return fn(newMemo, this.head);
  },

  concat(otherList) {
    return this.reduceRight((list, item) => cons(item, list), otherList);
  },

  toString() {
    const items = this.reduce((last, current) => `${last}, ${current}`);
    return `List(${items})`;
  },

  toArray() {
    return [...this];
  },

  *[Symbol.iterator]() {
    //yield *this.eachGen();
    yield this.head;
    yield *this.tail[Symbol.iterator]();
  }
};

function makeList(...values) {
  if (values.length === 0) {
    return Nil;
  }

  const [head, ...tail] = values;
  return cons(head, makeList(...tail));
}

function cons(head, tail) {
  const list = Object.create(List);
  list.head = head;
  list.tail = tail;
  return list;
}

export { Nil, cons, makeList as List };
