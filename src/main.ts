import './assets/main.css'

import { createApp } from 'vue'
import router from '@router/index';
import pinia from '@shared/stores/pinia';

import App from './App.vue'

const app = createApp(App)

app
  .use(pinia)
  .use(router);

router.isReady().then(() => app.mount('#app'));
