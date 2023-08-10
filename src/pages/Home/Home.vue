<script setup lang="ts">
import { computed, ref } from 'vue';

import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';
import Page from '@/components/Page.vue';
import { useGetRecipesQuery } from '@/pages/Home/api';
import RecipesList from '@/pages/Home/components/RecipesList.vue';
import { useFilteredRecipes } from '@/pages/Home/hooks/useFilteredRecipes';
import { useFavoriteRecipesStore } from '@/stores/favoritesRecipes';

const isFavorites = ref<boolean>(false);

const favoriteRecipesStore = useFavoriteRecipesStore();
const { isLoading, isError, data: recipes } = useGetRecipesQuery();

const favoritesBtnText = computed(() =>
  isFavorites.value ? 'All recipes' : 'Favorites',
);
const recipesData = computed(() =>
  isFavorites.value
    ? recipes.value.filter((recipe) =>
        favoriteRecipesStore.state.some((id) => id === recipe._id),
      )
    : recipes.value,
);

const { searchValue, filteredValues } = useFilteredRecipes(recipesData);
</script>

<template>
  <Page :isLoading="isLoading" :isError="isError" :hasBackButton="false">
    <section class="relative">
      <div class="my-3 flex items-center justify-between gap-3">
        <Input
          v-model="searchValue"
          placeholder="Discover best recipes..."
          class="w-full"
          iconName="search"
        />
        <Button @click="isFavorites = !isFavorites" variant="secondary">
          {{ favoritesBtnText }}
        </Button>
      </div>
      <RecipesList v-if="recipes" :recipes="filteredValues" />
    </section>
  </Page>
</template>
