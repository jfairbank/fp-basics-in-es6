import reduce from './reduce';

function map(array, fn) {
  return reduce(array, (newArray, item) => {
    const newItem = fn(item);
    return newArray.concat([newItem]);
  }, []);
}

export default map;
