function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.moveBy =
  function(dx, dy) {
    this.x += dx;
    this.y += dy;
  };
