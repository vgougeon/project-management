import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueAxentix from '@axentix/vue';

import '@axentix/vue/dist/vue2/vue-axentix.css';

const app = createApp(App)
app.use(store).use(router).use(VueAxentix)
app.mount('#app');
