customRequest({ url: '/cart/items' })
  .then(map(pluck('price')))
  .then(map(discount))
  .then(map(tax));
