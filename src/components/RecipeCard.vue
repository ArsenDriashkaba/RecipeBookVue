<script setup lang="ts">
import type { Recipe } from '@/types/recipe';

type Props = {
  recipe: Recipe;
};

defineProps<Props>();
</script>

<template>
  <div class="m-5 shadow-md w-full">
    <h1>{{ recipe.title }}</h1>
  </div>
</template>

<style scoped></style>
