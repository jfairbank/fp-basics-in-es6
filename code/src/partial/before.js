const createAdder = (x) => {
  return (y) => x + y;
};

const createRequester = (options) => {
  return (otherOptions) => {
    return request(Object.assign(
      {}, options, otherOptions
    ));
  };
};
