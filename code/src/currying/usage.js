const add3 = add(3);

add3(2) === 5;

const customRequest = request({
  headers: { 'X-Custom': 'mykey' }
});

const usersPromise = customRequest({ url: '/users' });
const tasksPromise = customRequest({ url: '/tasks' });
