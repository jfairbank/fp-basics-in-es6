/* eslint new-cap: 0 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function Point(x, y) {
  return { x: x, y: y };
}

function move(point, x, y) {
  return Point(point.x + x, point.y + y);
}

function distance(point1, point2) {
  return Math.sqrt(Math.pow(point2.x - point1.x) + Math.pow(point2.y - point2.y));
}

exports.Point = Point;
exports.move = move;
exports.distance = distance;