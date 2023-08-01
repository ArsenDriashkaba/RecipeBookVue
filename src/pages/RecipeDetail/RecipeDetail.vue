<script setup lang="ts">
import { useRoute } from 'vue-router';

import foodPlaceholder from '@/assets/food-placeholder.png';
import { useGetRecipeDetailQuery } from '@/pages/RecipeDetail/api';
import DirectionsList from '@/pages/RecipeDetail/components/DirectionsList.vue';
import IngredientsList from '@/pages/RecipeDetail/components/IngredientsList.vue';

const route = useRoute();
const recipeId: string = route.params?.id as string;
const { data: recipe } = useGetRecipeDetailQuery(recipeId);
</script>

<template>
  <h1 class="text-4xl my-10">{{ recipe?.title }}</h1>
  <p>
    Last modified:
    <DateFormat
      :date="recipe?.lastModifiedDate"
      has-time
      class="text-green-600"
    />
  </p>
  <div class="flex gap-16 py-8">
    <div class="w-1/3">
      <img :src="foodPlaceholder" alt="foodPlaceholder" class="w-full mb-6" />
      <IngredientsList :ingredients="recipe?.ingredients" />
    </div>
    <DirectionsList :directions="recipe?.directions" class="w-2/3" />
  </div>
</template>
