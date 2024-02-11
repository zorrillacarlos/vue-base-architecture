import { Server, Response } from 'miragejs';
import USER from '@/mocks/server/fixtures/users';

export const uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const mockServer = new Server({
  seeds(server) {
    server.db.loadData({
      users: USER,
    });
  },

  routes() {
    this.namespace = import.meta.env.VITE_APP_API_NAMESPACE;

    // get users
    this.get(`/users`, (schema) => schema.db.users);

    // add new users
    this.post('/users/create', (schema, request) => {
      const user = JSON.parse(request.requestBody);
      user.id = uuid()
      schema.db.users.push(user)
      return user;
    })
  }
})

export { mockServer };