<script setup lang="ts">
import { computed } from 'vue';

import foodPlaceholder from '@/assets/food-placeholder.png';
import FavoriteButton from '@/components/FavoriteButton.vue';
import { routes } from '@/router/routes';
import { useFavoriteRecipesStore } from '@/stores/favoritesRecipes';
import type { Recipe } from '@/types/recipe';

type Props = {
  recipe: Recipe;
};

const props = defineProps<Props>();

const { getIsFavorite } = useFavoriteRecipesStore();
const hoverStyles = computed(() =>
  getIsFavorite(props.recipe._id)
    ? 'opacity-100'
    : 'opacity-0 group-hover:opacity-100',
);
</script>

<template>
  <RouterLink :to="routes.recipeDetail(recipe._id)">
    <div
      class="shadow-md w-full h-full hover:scale-105 transition ease-in-out bg-newYellow relative group"
    >
      <FavoriteButton
        :recipeId="recipe._id"
        isIconButton
        :class="['absolute top-2 right-2 transition ease-in-out', hoverStyles]"
      />
      <img :src="foodPlaceholder" alt="foodPlaceholder" class="w-full" />
      <h2 class="w-full p-2 text-start">{{ recipe.title }}</h2>
    </div>
  </RouterLink>
</template>
