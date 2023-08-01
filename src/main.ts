import { createApp } from 'vue';
import { VueQueryPlugin } from '@tanstack/vue-query';
import DateFormat from '@voidsolutions/vue-dateformat';
import { createPinia } from 'pinia';

import { queryClient } from '@/api/queryClient';
import App from '@/App.vue';
import router from '@/router';

import './assets/main.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueQueryPlugin, { queryClient });
app.use(DateFormat);

app.mount('#app');
