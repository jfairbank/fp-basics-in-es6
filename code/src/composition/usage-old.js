const logger = (name, fn) => (...args) => (console.log(name), fn(...args));

const map = fn => array => array.map(fn);
const multiply = x => y => x * y;
const pluck = key => object => object[key];
const each = fn => array => array.forEach(fn);
const identity = x => x;
const log = console.log.bind(console);
const compose = (...fns) => (...args) => {
  if (fns.length === 0) {
    return args[0];
  }

  const last = fns[fns.length - 1];
  const rest = fns.slice(0, -1);

  return rest.reduceRight((memo, fn) => {
    return fn(memo);
  }, last(...args));
};

//const log = compose(
//  console.log.bind(console),
//  identity
//);

//const names = ['Jeremy', 'Alice', 'Bob'];

const toUpperCase = s => s.toUpperCase();
//const toUpperCase = logger('toUpperCase', s => s.toUpperCase());
const reverse = s => s.split('').reverse().join('');
const hyphenate = s => {
  const middle = Math.floor(s.length / 2);
  return s.slice(0, middle) + '-' + s.slice(middle);
};
//const reverse = logger('reverse', s => s.split('').reverse().join(''));
const secondArg = (_, x) => x;

//const fileContents = fs.createReadStream('my/file.txt', 'utf-8');

import readline from 'readline';
import fs from 'fs';
import Rx from 'rx';

const filename = '/usr/share/dict/words';

const lineReader = readline.createInterface({
  input: fs.createReadStream(filename, 'utf-8')
});

Rx.Observable.fromEvent(lineReader, 'line')
  .filter(s => s.length > 3)
  //.map(compose(
  //  hyphenate,
  //  reverse,
  //  toUpperCase
  //))
  .map(toUpperCase)
  .map(reverse)
  .map(hyphenate)
  .take(5)
  .subscribe(compose(log, identity));



//fs.readFile('words', 'utf-8', (err, data) => {
//});

//compose(

//  map(createUser)
//)(names);


//const log = console.log.bind(console);

//customRequest('/cart/items')
//  .then(map(pluck('price')))
//  .then(map(tax))
//  .then(each(log));
