const request = (defaults, options) => {
  options = Object.assign({}, defaults, options);

  return fetch(options.url, options)
    .then(resp => resp.json());
};

const customRequest = partial(request, {
  headers: { 'X-Custom': 'mykey' }
});

const usersPromise = customRequest({ url: '/users' });
const tasksPromise = customRequest({ url: '/tasks' });
