const prop = key => object => object[key];
const equals = a => b => a === b;
const map = fn => array => array.map(fn);
const reduce = (fn, initial) => array => array.reduce(fn, initial);
const sum = reduce((x, y) => x + y, 0);

const compose = (...fns) => x => fns.reduceRight((result, fn) => fn(result), x);

const propEq = (name, value) => compose(equals(value), prop(name));

const average = items => (
  items.length === 0
    ? 0
    : sum(items) / items.length
);

const filterBy = filters => items => (
  items.filter(item => filters.every(filter => filter(item)))
);

const calcAvgCost = (items, filters = []) => (
  compose(
    average,
    map(prop('price')),
    filterBy(filters)
  )(items)
);

const items = [
  { name: 'Motherboard', manufacturer: 'A', price: 65 },
  { name: 'CPU', manufacturer: 'A', price: 240 },
  { name: 'DRAM', manufacturer: 'B', price: 100 },
  { name: 'CPU', manufacturer: 'B', price: 150 },
];

const avgCost = calcAvgCost(items);

const avgCostCPU = calcAvgCost(items, [
  propEq('name', 'CPU'),
]);

const avgCostB = calcAvgCost(items, [
  propEq('manufacturer', 'B'),
]);

const avgCostCPUFromA = calcAvgCost(items, [
  propEq('name', 'CPU'),
  propEq('manufacturer', 'A'),
]);

console.log('Average Cost = %d', avgCost);
console.log('Average Cost CPU = %d', avgCostCPU);
console.log('Average Cost B = %d', avgCostB);
console.log('Average Cost CPU from A = %d', avgCostCPUFromA);
