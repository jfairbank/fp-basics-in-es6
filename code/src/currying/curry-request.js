const request = defaults => options => {
  options = Object.assign(
    {}, defaults, options
  );

  return fetch(options.url, options)
    .then(resp => resp.json());
};
