import { Server, Response } from 'miragejs';
import USER from '@/mocks/server/fixtures/users';

const mockServer = new Server({
  seeds(server) {
    server.db.loadData({
      users: USER,
    });
  },

  routes() {
    this.namespace = import.meta.env.VITE_APP_API_NAMESPACE;

    // get messages
    this.get(`/users`, (schema) => schema.db.users);
  }
})

export { mockServer };