class Hobbyist {
  constructor(hobbies) {
    this.hobbies = Object.freeze(
      hobbies.slice(0)
    );
  }

  addHobby(hobby) {
    return new Hobbyist(
      this.hobbies.concat(hobby)
    );
  }

  getHobbies() {
    return this.hobbies;
  }
}

const hobbies = ['programming'];
let me = new Hobbyist(hobbies);
me = me.addHobby('reading');
me = me.addHobby('music');

console.log(me.getHobbies());
// ['programming', 'reading', 'music']

const firstTwo = hobbies.splice(0, 2);
console.log(me.getHobbies());
// ['programming', 'reading', 'music']
