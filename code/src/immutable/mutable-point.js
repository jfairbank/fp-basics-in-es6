class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  moveBy(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
}

const point = new Point(0, 0);

point.moveBy(5, 5);
point.moveBy(-2, 2);

console.log([point.x, point.y]);
// [3, 7]
