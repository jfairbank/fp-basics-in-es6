class Hobbyist {
  constructor(hobbies) {
    this.hobbies = hobbies;
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
  }

  getHobbies() {
    return this.hobbies;
  }
}

const hobbies = ['programming'];
const me = new Hobbyist(hobbies);

me.addHobby('reading');
me.addHobby('music');

console.log(me.getHobbies());
// ['programming', 'reading', 'music']

const firstTwo = hobbies.splice(0, 2);
console.log(me.getHobbies());
// ['reading']
