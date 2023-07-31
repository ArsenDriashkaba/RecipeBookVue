<script setup lang="ts">
import { routes } from '@/router/routes';
import type { Recipe } from '@/types/recipe';

type Props = {
  recipe: Recipe;
};

defineProps<Props>();
</script>

<template>
  <RouterLink :to="routes.recipeDetail(recipe._id)">
    <div class="m-5 shadow-md w-full">
      <h1>{{ recipe.title }}</h1>
    </div></RouterLink
  >
</template>

<style scoped></style>
