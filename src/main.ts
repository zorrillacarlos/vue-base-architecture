import './assets/main.css'

import { createApp } from 'vue'
import pinia from '@shared/stores/pinia';

import App from './App.vue'
import router from './app/router'

const app = createApp(App)

app
  .use(pinia)
  .use(router);

router.isReady().then(() => app.mount('#app'));
