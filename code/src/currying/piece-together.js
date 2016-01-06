const map = fn => array => array.map(fn);
const multiply = x => y => x * y;
const pluck = key => object => object[key];

const discount = multiply(0.98);
const tax = multiply(1.0925);

const customRequest = request({
  headers: { 'X-Custom': 'mykey' }
});

customRequest({ url: '/cart/items' })
  .then(map(pluck('price')))
  .then(map(discount))
  .then(map(tax));
