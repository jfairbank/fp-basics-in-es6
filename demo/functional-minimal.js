const calcAvgCost = (items, filters = []) => {
  const filteredItems = items.filter(
    item => filters.every(filter => filter(item))
  );

  if (filteredItems.length === 0) {
    return 0;
  }

  const total = filteredItems.reduce((x, item) => x + item.price, 0);

  return total / filteredItems.length;
};

const items = [
  { name: 'Motherboard', manufacturer: 'A', price: 65 },
  { name: 'CPU', manufacturer: 'A', price: 240 },
  { name: 'DRAM', manufacturer: 'B', price: 100 },
  { name: 'CPU', manufacturer: 'B', price: 150 },
];

const avgCost = calcAvgCost(items);

const avgCostCPU = calcAvgCost(items, [
  ({ name }) => name === 'CPU',
]);

const avgCostB = calcAvgCost(items, [
  ({ manufacturer }) => manufacturer === 'B',
]);

const avgCostCPUFromA = calcAvgCost(items, [
  ({ name }) => name === 'CPU',
  ({ manufacturer }) => manufacturer === 'A',
]);

console.log('Average Cost = %d', avgCost);
console.log('Average Cost CPU = %d', avgCostCPU);
console.log('Average Cost B = %d', avgCostB);
console.log('Average Cost CPU from A = %d', avgCostCPUFromA);
