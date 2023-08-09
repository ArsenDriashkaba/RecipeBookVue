import { computed, ref } from 'vue';
import type { Ref } from 'vue';

import type { Recipe } from '@/types/recipe';

export const useFilteredRecipes = (recipes: Ref<Recipe[]>) => {
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

  return { searchValue, filteredValues };
};
