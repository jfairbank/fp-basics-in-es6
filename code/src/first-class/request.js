const request = (options) => {
  return fetch(options.url, options)
    .then(resp => resp.json());
};

const usersPromise = request({
  url: '/users',
  headers: { 'X-Custom': 'mykey' }
});

const tasksPromise = request({
  url: '/tasks',
  headers: { 'X-Custom': 'mykey' }
});
