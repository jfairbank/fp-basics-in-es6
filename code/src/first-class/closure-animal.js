const request = (url, options) => {
  return fetch(url, options).then(resp => resp.json());
};

const usersPromise = request('/users', {
  headers: {
    'X-Custom': 'mykey'
  }
});

const tasksPromise = request('/tasks', {
  headers: {
    'X-Custom': 'mykey'
  }
});
