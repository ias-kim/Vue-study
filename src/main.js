import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import router from '@/routes/index';
import { formatDate } from '@/utils/filters';

const app = createApp(App);
const pinia = createPinia();

app.config.globalProperties.$filters = {
  formatDate
};

app.use(pinia);
app.use(router);
app.mount('#app');
