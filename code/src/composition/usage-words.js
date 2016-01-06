const toUpperCase = s => s.toUpperCase();
const reverse = s => s.split('').reverse().join('');

const hyphenate = s => {
  if (s.length < 2) {
    return s;
  }

  const middle = Math.floor(s.length / 2);
  return s.slice(0, middle) + '-' + s.slice(middle);
};

const processWord =
  compose(hyphenate, reverse, toUpperCase);

const words = [
  'hello', 'functional', 'programming'
];

const newWords = words.map(processWord);

console.log(newWords);
// ['OL-LEH, 'LANOI-TCNUF', 'GNIMM-ARGORP']
