<script setup lang="ts">
import { useRoute } from 'vue-router';

import { useGetRecipeDetailQuery } from '@/pages/RecipeDetail/api';

const route = useRoute();
const recipeId: string = route.params?.id as string;
const { data: recipe } = useGetRecipeDetailQuery(recipeId);
</script>

<template>
  <h1>{{ recipe?.title }}</h1>
  <p>{{ recipe?.directions }}</p>
  <p>{{ recipe?.lastModifiedDate }}</p>
  <ul>
    <li v-for="ingredient in recipe?.ingredients" :key="ingredient._id">
      {{ ingredient.name }}
    </li>
  </ul>
</template>
