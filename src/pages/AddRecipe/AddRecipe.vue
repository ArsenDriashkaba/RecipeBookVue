<script setup lang="ts">
import Page from '@/components/Page.vue';
import RecipeForm from '@/components/RecipeForm/RecipeForm.vue';
import { useAddRecipeMutation } from '@/pages/AddRecipe/api';
import router from '@/router';
import { routes } from '@/router/routes';
import type { AddRecipe } from '@/types/recipe';

const { mutate, isError, isLoading } = useAddRecipeMutation();

const handleAddRecipe = ({ newIngredient, ...recipe }: AddRecipe) =>
  mutate(recipe, {
    onSuccess: (data) => router.push(routes.recipeDetail(data._id)),
  });
</script>

<template>
  <Page :isError="isError" :isLoading="isLoading">
    <h1 class="text-3xl mt-5">{{ $t('addRecipe.createNewRecipe') }}</h1>
    <RecipeForm
      @onSubmit="handleAddRecipe"
      hasCancelButton
      @onCancel="router.go(-1)"
      :isLoading="isLoading"
    />
  </Page>
</template>
