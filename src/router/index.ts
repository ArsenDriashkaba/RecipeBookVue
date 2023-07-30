import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/Home/Home.vue';
import RecipeDetail from '@/pages/RecipeDetail/RecipeDetail.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/recipe/:id',
      name: 'recipe',
      component: RecipeDetail,
    },
  ],
});

export default router;
