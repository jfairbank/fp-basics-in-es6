const {
  compose,
  meanBy,
  propEq,
} = require('lodash/fp');

const filterBy = filters => items => (
  items.filter(item => filters.every(filter => filter(item)))
);

const calcAvgCost = (items, filters = []) => (
  compose(
    meanBy('price'),
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
