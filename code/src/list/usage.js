import { Nil, List } from './list';

let list1 = List(1, 2, 3);
let list2 = List(42, 13, 20);
let list3 = list1.concat(list2);
let list4 = List(...list1, ...list2);
let list5 = list1.concat(Nil);
let array1 = Array.from(list3);
let [...array2] = list4;
let array3 = list3.toArray();

console.log(list1.toString());
console.log(list2.toString());
console.log(list3.toString());
console.log(list4.toString());
console.log(list5.toString());
console.log(array1);
console.log(array2);
console.log(array3);

for (let item of list3) {
  console.log('item =', item);
}
