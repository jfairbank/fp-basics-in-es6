/* eslint new-cap: 0 */
function Point(x, y) {
  return { x, y };
}

function move(point, x, y) {
  return Point(point.x + x, point.y + y);
}

function distance(point1, point2) {
  return Math.sqrt(
    Math.pow(point2.x - point1.x) +
    Math.pow(point2.y - point2.y)
  );
}

export { Point, move, distance };
