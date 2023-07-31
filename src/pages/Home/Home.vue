<script setup lang="ts">
import { computed, ref } from 'vue';

import RecipesList from '@/components/RecipesList.vue';
import { useGetRecipesQuery } from '@/pages/Home/api';
import type { Recipe } from '@/types/recipe';

const { isLoading, data: recipes } = useGetRecipesQuery();

const searchValue = ref<string>('');

const filteredValues = computed<Recipe[]>(() => {
  if (!recipes.value) {
    return [];
  }

  if (!searchValue.value) {
    return recipes.value;
  }

  return recipes.value.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchValue.value.toLowerCase()),
  );
});
</script>

<template>
  <section>
    <h1 v-if="isLoading">Loading...</h1>
    <div class="m-3">
      <input v-model="searchValue" />
    </div>
    <RecipesList v-if="recipes" :recipes="filteredValues" />
  </section>
</template>
