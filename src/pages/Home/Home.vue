<script setup lang="ts">
import { ref, watch } from 'vue';

import RecipesList from '@/components/RecipesList.vue';
import { useGetRecipes } from '@/pages/Home/api';
import type { Recipe } from '@/types/recipe';

const { isLoading, data: recipes } = useGetRecipes();
const filteredValues: Recipe[] = ref(recipes);
const searchValue = ref('');
</script>

<template>
  <h1 v-if="isLoading">Loading...</h1>
  <h1>Its a home page</h1>
  <input v-model="searchValue" />
  <RecipesList v-if="recipes" :recipes="filteredValues" />
</template>

<style scoped></style>
