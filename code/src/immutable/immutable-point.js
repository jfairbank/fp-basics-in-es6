const createPoint = (x, y) => Object.freeze([x, y]);

const movePointBy = ([x, y], dx, dy) => {
  return Object.freeze([x + dx, y + dy]);
};

let point = createPoint(0, 0);

point = movePointBy(point, 5, 5);
point = movePointBy(point, -2, 2);

console.log(point);
// [3, 7]
