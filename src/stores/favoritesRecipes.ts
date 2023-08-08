import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useFavoriteRecipesStore = defineStore('favoriteRecipes', () => {
  const recipeJsonString = localStorage.getItem('recipes');
  const recipes: string[] = recipeJsonString
    ? JSON.parse(recipeJsonString)
    : [];
  const state = ref<string[]>(recipes);

  const addToFavorites = (value: string) => {
    state.value.push(value);

    localStorage.setItem('recipes', JSON.stringify(state.value));
  };

  const removeFromFavorites = (value: string) => {
    state.value = state.value.filter((id) => id !== value);

    localStorage.setItem('recipes', JSON.stringify(state.value));
  };

  const toggleFavoriteState = (value?: string) => {
    if (!value) {
      return;
    }

    if (getIsFavorite(value)) {
      removeFromFavorites(value);

      return;
    }

    addToFavorites(value);
  };

  const getIsFavorite = (value: string) =>
    state.value.some((id) => id === value);

  return {
    state,
    addToFavorites,
    removeFromFavorites,
    toggleFavoriteState,
    getIsFavorite,
  };
});
