const hobbies = [
  'programming',
  'reading',
  'music'
];

const firstTwo = hobbies.splice(0, 2);

console.log(firstTwo);
// ['programming', 'reading']

console.log(hobbies);
// ['music']
