import { createApp, defineAsyncComponent } from 'vue';
import router from '@router/index';
import pinia from '@shared/stores/pinia';


// mock server
import '@/mocks/server';

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

// use symbols instead string for provide name
app.provide<IUserUseCase>('useUser', useUserService);
