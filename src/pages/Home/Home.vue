<script setup lang="ts">
import { computed, ref } from 'vue';

import { useGetRecipesQuery } from '@/pages/Home/api';
import RecipesList from '@/pages/Home/components/RecipesList.vue';
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
  <section class="relative">
    <h1 v-if="isLoading">Loading...</h1>
    <div class="m-3 sticky top-0">
      <input
        v-model="searchValue"
        placeholder="Discover best recipes..."
        class="w-2/3"
      />
    </div>
    <RecipesList v-if="recipes" :recipes="filteredValues" />
  </section>
</template>
