function add(x, y) {
  return x + y;
}

function capitalize(string) {
  return string[0].toUpperCase() +
         string.slice(1).toLowerCase();
}

function toTitleCase(string) {
  return string
    .split(/\s+/)
    .map(capitalize)
    .join(' ');
}
