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

const point = new Point(1, 1);
point.moveBy(2, 3);

console.log([point.x, point.y]);
// [3, 4]
