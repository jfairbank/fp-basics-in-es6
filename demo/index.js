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

  filter(item) {
    return item;
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

const items = [
  new Item('Motherboard', 'A', 65, 20),
  new Item('CPU', 'A', 240, 10),
  new Item('DRAM', 'B', 100, 50),
  new Item('CPU', 'B', 150, 20),
];

const req = new Requisition(items);

const avgCost = req.getAverageCost(new Average());
const avgCostCPU = req.getAverageCost(new AverageByName('CPU'));

const avgCostB = req.getAverageCost(new AverageByManufacturer('B'));

const avgCostCPUFromA = req.getAverageCost(new AverageByChildren([
  new AverageByName('CPU'),
  new AverageByManufacturer('A'),
]));

console.log('Average Cost = %d', avgCost);
console.log('Average Cost CPU = %d', avgCostCPU);
console.log('Average Cost B = %d', avgCostB);
console.log('Average Cost CPU from A = %d', avgCostCPUFromA);
