import { createRouter, createWebHistory } from 'vue-router';

import AddRecipe from '@/pages/AddRecipe/AddRecipe.vue';
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
      path: '/recipes/:id',
      name: 'recipeDetail',
      component: RecipeDetail,
    },
    {
      path: '/recipes/add',
      name: 'addRecipe',
      component: AddRecipe,
    },
  ],
});

export default router;
