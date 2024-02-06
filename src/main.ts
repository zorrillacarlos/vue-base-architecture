import { createApp, defineAsyncComponent } from 'vue';
import router from '@router/index';
import pinia from '@shared/stores/pinia';
import { User } from './modules/user/domain/User';

// create lazy APP
const app = createApp(defineAsyncComponent(() => import('@ui/App.vue')));

app
  .use(pinia)
  .use(router);

router.isReady().then(() => app.mount('#app'));

const xxx = User.create({
  id: '12345',
  name: 'Giuseppe',
  surname: 'Caso',
  email: '76.giuseppe.caso@gmail.com'
})

console.log(xxx)
