<script setup lang="ts">
import type { Recipe } from '@/types/recipe';

type Props = {
  recipe: Recipe;
};

defineProps<Props>();
</script>

<template>
  <h1>{{ recipe.title }}</h1>
</template>

<style scoped></style>
