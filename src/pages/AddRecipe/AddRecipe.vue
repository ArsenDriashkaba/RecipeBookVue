<script setup lang="ts">
import RecipeForm from '@/components/RecipeForm/RecipeForm.vue';
import {
  useAddRecipeMutation,
  useGetIngredientsQuery,
} from '@/pages/AddRecipe/api';
import type { AddRecipe } from '@/types/recipe';

const { data: ingredients } = useGetIngredientsQuery();
const { mutate } = useAddRecipeMutation();

const handleTest = (e: AddRecipe) => {
  const { newIngredient, ...recipe } = e;
  mutate(recipe);
};
</script>

<template>
  <h1>Add recipe!</h1>
  <RecipeForm :ingredients="ingredients" @onSubmit="handleTest" />
</template>
