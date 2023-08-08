<script setup lang="ts">
import foodPlaceholder from '@/assets/food-placeholder.png';
import { routes } from '@/router/routes';
import { useFavoriteRecipesStore } from '@/stores/favoritesRecipes';
import type { Recipe } from '@/types/recipe';

type Props = {
  recipe: Recipe;
};

defineProps<Props>();

const { getIsFavorite } = useFavoriteRecipesStore();
</script>

<template>
  <RouterLink :to="routes.recipeDetail(recipe._id)">
    <div
      class="shadow-md w-full h-full hover:scale-110 transition ease-in-out bg-newYellow"
    >
      <img :src="foodPlaceholder" alt="foodPlaceholder" class="w-full" />
      <h2 class="w-full p-2 text-start">{{ recipe.title }}</h2>
      <p v-if="getIsFavorite(recipe._id)">Is favorite</p>
    </div>
  </RouterLink>
</template>

<style scoped></style>
