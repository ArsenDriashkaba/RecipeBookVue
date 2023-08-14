import { createApp } from 'vue';
import { VueQueryPlugin } from '@tanstack/vue-query';
import DateFormat from '@voidsolutions/vue-dateformat';
import I18NextVue from 'i18next-vue';
import { createPinia } from 'pinia';

import { queryClient } from '@/api/queryClient';
import App from '@/App.vue';
import i18next from '@/i18n/i18n';
import router from '@/router';

import './assets/main.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueQueryPlugin, { queryClient });
app.use(DateFormat);
app.use(I18NextVue, { i18next });

app.mount('#app');
