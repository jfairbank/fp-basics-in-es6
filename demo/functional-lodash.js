const {
  filter,
  flow,
  meanBy,
} = require('lodash/fp');

const calcAvgCost = (items, filterFn = () => true) => (
  flow(
    filter(filterFn),
    meanBy('price')
  )(items)
);

it('passes tests', () => {
  const items = [
    { name: 'Motherboard', manufacturer: 'A', price: 65 },
    { name: 'CPU', manufacturer: 'A', price: 240 },
    { name: 'DRAM', manufacturer: 'B', price: 100 },
    { name: 'CPU', manufacturer: 'B', price: 150 },
  ];

  const avgCost = calcAvgCost(items);

  const avgCostCPU = calcAvgCost(items, item => (
    item.name === 'CPU'
  ));

  const avgCostB = calcAvgCost(items, item => (
    item.manufacturer === 'B'
  ));

  const avgCostCPUFromA = calcAvgCost(items, item => (
    item.name === 'CPU' && item.manufacturer === 'A'
  ));

  expect(avgCost).toBe(138.75);
  expect(avgCostCPU).toBe(195);
  expect(avgCostB).toBe(125);
  expect(avgCostCPUFromA).toBe(240);

  console.log('Average Cost = %d', avgCost);
  console.log('Average Cost CPU = %d', avgCostCPU);
  console.log('Average Cost B = %d', avgCostB);
  console.log('Average Cost CPU from A = %d', avgCostCPUFromA);
});
