import { createRouter, createWebHistory } from 'vue-router';

const lazyLoadPage = (pageComponent: string) => {
  return () => import(`@/pages/${pageComponent}/${pageComponent}.vue`);
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: lazyLoadPage('Home'),
    },
    {
      path: '/recipes/:id',
      name: 'recipeDetail',
      component: lazyLoadPage('RecipeDetail'),
    },
    {
      path: '/recipes/add',
      name: 'addRecipe',
      component: lazyLoadPage('AddRecipe'),
    },
    {
      path: '/:notfound(.*)*',
      component: lazyLoadPage('NotFound'),
    },
  ],
});

export default router;
