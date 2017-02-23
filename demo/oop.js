class Item {
  constructor(name, manufacturer, price) {
    this.name = name;
    this.manufacturer = manufacturer;
    this.price = price;
  }
}

class Requisition {
  constructor(items) {
    this.items = items;
  }

  getAverageCost(average) {
    return average.getAverageCost(this);
  }
}

class Average {
  getAverageCost(requisition) {
    let total = 0;
    let count = 0;

    for (let i = 0, l = requisition.items.length; i < l; i++) {
      const item = requisition.items[i];

      if (this.filter(item)) {
        total += item.price;
        count += 1;
      }
    }

    if (count === 0) {
      return 0;
    }

    return total / count;
  }

  filter() {
    return true;
  }
}

class AverageByName extends Average {
  constructor(name) {
    super();
    this.name = name;
  }

  filter(item) {
    return item.name === this.name;
  }
}

class AverageByManufacturer extends Average {
  constructor(manufacturer) {
    super();
    this.manufacturer = manufacturer;
  }

  filter(item) {
    return item.manufacturer === this.manufacturer;
  }
}

class AverageByChildren extends Average {
  constructor(children) {
    super();
    this.children = children;
  }

  filter(item) {
    for (let i = 0, l = this.children.length; i < l; i++) {
      const child = this.children[i];

      if (!child.filter(item)) {
        return false;
      }
    }

    return true;
  }
}

it('passes tests', () => {
  const items = [
    new Item('Motherboard', 'A', 65),
    new Item('CPU', 'A', 240),
    new Item('DRAM', 'B', 100),
    new Item('CPU', 'B', 150),
  ];

  const req = new Requisition(items);

  const avgCost = req.getAverageCost(new Average());
  const avgCostCPU = req.getAverageCost(new AverageByName('CPU'));

  const avgCostB = req.getAverageCost(new AverageByManufacturer('B'));

  const avgCostCPUFromA = req.getAverageCost(new AverageByChildren([
    new AverageByName('CPU'),
    new AverageByManufacturer('A'),
  ]));

  expect(avgCost).toBe(138.75);
  expect(avgCostCPU).toBe(195);
  expect(avgCostB).toBe(125);
  expect(avgCostCPUFromA).toBe(240);

  console.log('Average Cost = %d', avgCost);
  console.log('Average Cost CPU = %d', avgCostCPU);
  console.log('Average Cost B = %d', avgCostB);
  console.log('Average Cost CPU from A = %d', avgCostCPUFromA);
});
