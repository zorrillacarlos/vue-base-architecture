import { createApp, defineAsyncComponent } from 'vue';
import router from '@router/index';
import pinia from '@shared/stores/pinia';
import { User } from './modules/user/domain/User';

// use cases
import { UserServiceEntryPoint } from '@modules/user/application/use-cases';

// service
import { HTTPServiceProvider } from '@shared/providers/http/http.service';

// controller
import { UserController } from '@modules/user/infrastructure/UserController';
import type { IUserUseCase } from './modules/user/application/interfaces/userUseCase';



// create lazy APP
const app = createApp(defineAsyncComponent(() => import('@ui/App.vue')));

const useUserController = new UserController(new HTTPServiceProvider);
const useUserService = new UserServiceEntryPoint(useUserController);

app
  .use(pinia)
  .use(router);

router.isReady().then(() => app.mount('#app'));
app.provide<IUserUseCase>('useUser', useUserService);

const xxx = User.create({
  id: '12345',
  name: 'Giuseppe',
  surname: 'Caso',
  email: '76.giuseppe.caso@gmail.com'
})

console.log(xxx)
