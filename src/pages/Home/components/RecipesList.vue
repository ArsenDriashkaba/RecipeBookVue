<script setup lang="ts">
import RecipeCard from '@/pages/Home/components/RecipeCard.vue';
import type { Recipe } from '@/types/recipe';

type Props = {
  recipes?: Recipe[];
};

defineProps<Props>();
</script>

<template>
  <div class="grid grid-cols-5">
    <RecipeCard v-for="recipe in recipes" :recipe="recipe" :key="recipe?._id" />
  </div>
</template>

<style scoped></style>
