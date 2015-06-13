let myValue = 'foo';

function closure() {
  console.log(myValue);
}

function trickyClosure() {
  let myValue = 'bar';
  console.log(myValue);
}

function anotherTrickyClosure() {
  myValue = 'hello world';
  console.log(myValue);
}

closure();              // 'foo'
trickyClosure();        // 'bar'
closure();              // 'foo'
anotherTrickyClosure(); // 'hello world'
closure();              // 'hello world'
trickyClosure();        // 'bar'
