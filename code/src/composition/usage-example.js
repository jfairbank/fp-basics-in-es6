import map from './map';
import compose from './compose';

const pluck = key => object => (console.log('pluck:', key), object[key]);
const multiply = x => name => y => (console.log(name), x * y);

const discount = multiply(0.98)('discount');
const tax = multiply(1.0925)('tax');

const customRequest = () => new Promise(resolve => resolve([
  { price: 5 },
  { price: 10 },
  { price: 3 }
]));

customRequest({ url: '/cart/items' })
  .then(map(
    compose(
      tax,
      discount,
      pluck('price')
    )
  ));
