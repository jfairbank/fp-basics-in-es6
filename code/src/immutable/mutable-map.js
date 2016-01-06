class Person {
  constructor(hobbies) {
    this.hobbies = [];
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
  }

  getHobbies() {
    return this.hobbies;
  }
}

const me = new Person();
me.addHobby('programming');
me.addHobby('reading');

const hobbies = me.getHobbies();
hobbies.splice(0, 1);

console.log(me.getHobbies()); // ['reading']

//function map(fn, array) {
//  for (let i = 0; i < array.length; i++) {
//    array[i] = fn(array[i]);
//  }

//  return array;
//}

//const array = [1, 2, 3];
//const newArray = map(n => n * 2, array);

//console.log(newArray); // [2, 4, 6]
//console.log(array);    // [2, 4, 6]
