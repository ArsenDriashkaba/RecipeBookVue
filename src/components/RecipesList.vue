<script setup lang="ts">
import RecipeCard from '@/components/RecipeCard.vue';
import type { Recipe } from '@/types/recipe';

type Props = {
  recipes: Recipe[];
};

defineProps<Props>();
</script>

<template>
  <h1>This is a recipes list component</h1>
  <RecipeCard v-for="recipe in recipes" :recipe="recipe" :key="recipe._id" />
</template>

<style scoped></style>
