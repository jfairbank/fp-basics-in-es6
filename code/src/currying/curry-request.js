const request = defaults => options => {
  return request(Object.assign(
    {}, defaults, options
  ));
};
