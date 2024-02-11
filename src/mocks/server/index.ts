import { Server, Response } from 'miragejs';
import USER from '@/mocks/server/fixtures/users';
import { uuid } from '@/app/shared/helpers';

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