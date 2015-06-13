function filter(array, fn) {
  if (array.length === 0) {
    return array;
  }

  const keep = fn(array[0]);
  const tail = array.slice(1);

  if (keep) {
    const head = [array[0]];
    return head.concat(filter(tail, fn));
  }

  return filter(tail, fn);
}

//import reduce from './reduce';

//function filter(array, fn) {
//  return reduce(array, (newArray, item) => {
//    if (fn(item)) {
//      return newArray.concat([item]);
//    }

//    return newArray;
//  }, []);
//}

export default filter;
