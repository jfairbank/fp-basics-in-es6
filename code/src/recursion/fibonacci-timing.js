//import fibonacci from './fibonacci';
import fibonacci from './fibonacci-tco';

const N = 1000;

function times(n, fn) {
  while (n--) fn();
}

function time(name, fn) {
  console.time(name);
  //times(N, fn);
  fn();
  console.timeEnd(name);
}

time('fibonacci(1)',   () => fibonacci(1));
time('fibonacci(5)',   () => fibonacci(5));
time('fibonacci(20)',  () => fibonacci(20));
time('fibonacci(30)',  () => fibonacci(30));
time('fibonacci(35)',  () => fibonacci(35));
time('fibonacci(40)',  () => fibonacci(40));
time('fibonacci(45)',  () => fibonacci(45));
time('fibonacci(100)', () => fibonacci(100));
