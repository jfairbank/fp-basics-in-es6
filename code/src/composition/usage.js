customRequest({ url: '/cart/items' })
  .then(map(
    compose(
      tax,
      discount,
      pluck('price')
    )
  ));
