const createRequester = (options) => {
  return (otherOptions) => {
    return request(Object.assign(
      {}, options, otherOptions
    ));
  };
};

const customRequest = createRequester({
  headers: { 'X-Custom': 'mykey' }
});

const usersPromise = customRequest({ url: '/users' });
const tasksPromise = customRequest({ url: '/tasks' });
