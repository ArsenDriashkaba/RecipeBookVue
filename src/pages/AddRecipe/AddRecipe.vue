<script setup lang="ts">
import RecipeForm from '@/components/RecipeForm/RecipeForm.vue';
import { useAddRecipeMutation } from '@/pages/AddRecipe/api';
import router from '@/router';
import { routes } from '@/router/routes';
import type { AddRecipe } from '@/types/recipe';

const { mutate } = useAddRecipeMutation();

const handleAddRecipe = ({ newIngredient, ...recipe }: AddRecipe) =>
  mutate(recipe, {
    onSuccess: (data) => router.push(routes.recipeDetail(data._id)),
  });
</script>

<template>
  <h1>Add recipe!</h1>
  <RecipeForm @onSubmit="handleAddRecipe" />
</template>
