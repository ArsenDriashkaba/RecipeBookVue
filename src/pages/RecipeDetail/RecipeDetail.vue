<script setup lang="ts">
import { useRoute } from 'vue-router';

import { useGetRecipeDetailQuery } from '@/pages/RecipeDetail/api';
import DirectionsList from '@/pages/RecipeDetail/components/DirectionsList.vue';
import IngredientsList from '@/pages/RecipeDetail/components/IngredientsList.vue';

const route = useRoute();
const recipeId: string = route.params?.id as string;
const { data: recipe } = useGetRecipeDetailQuery(recipeId);
</script>

<template>
  <h1>{{ recipe?.title }}</h1>
  <p>{{ recipe?.lastModifiedDate }}</p>
  <DirectionsList :directions="recipe?.directions" />
  <IngredientsList :ingredients="recipe?.ingredients" />
</template>
