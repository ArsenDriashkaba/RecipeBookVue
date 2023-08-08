<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

import foodPlaceholder from '@/assets/food-placeholder.png';
import Button from '@/components/Button.vue';
import FavoriteButton from '@/components/FavoriteButton.vue';
import Page from '@/components/Page.vue';
import RecipeForm from '@/components/RecipeForm/RecipeForm.vue';
import {
  useGetRecipeDetailQuery,
  useUpdateRecipeMutation,
} from '@/pages/RecipeDetail/api';
import DirectionsList from '@/pages/RecipeDetail/components/DirectionsList.vue';
import IngredientsList from '@/pages/RecipeDetail/components/IngredientsList.vue';

const route = useRoute();
const recipeId: string = route.params?.id as string;
const recipeDetailQuery = useGetRecipeDetailQuery(recipeId);
const recipeDetailMutation = useUpdateRecipeMutation(recipeId);

const { data: recipe } = recipeDetailQuery;
const isEditMode = ref(false);
const isLoading = computed(
  () =>
    recipeDetailQuery.isLoading.value || recipeDetailMutation.isLoading.value,
);
const isError = computed(
  () => recipeDetailQuery.isError.value || recipeDetailMutation.isError.value,
);

const handleUpdateRecipe = ({ newIngredient, ...recipe }: any) =>
  recipeDetailMutation.mutate(recipe, {
    onSuccess: () => {
      recipeDetailQuery.refetch();
      isEditMode.value = false;
    },
  });
</script>

<template>
  <Page :isError="isError" :isLoading="isLoading">
    <div v-if="isEditMode">
      <RecipeForm
        :initialValues="recipe"
        @onSubmit="handleUpdateRecipe"
        hasCancelButton
        @onCancel="isEditMode = false"
      />
    </div>
    <div v-else>
      <div class="pt-10 pb-5 mb-5 flex items-center justify-between border-b-2">
        <h1 class="text-4xl">{{ recipe?.title }}</h1>
        <div class="flex gap-3">
          <FavoriteButton :recipeId="recipe?._id" />
          <Button @click="isEditMode = true">Edit</Button>
        </div>
      </div>
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
          <img
            :src="foodPlaceholder"
            alt="foodPlaceholder"
            class="w-full mb-6"
          />
          <IngredientsList :ingredients="recipe?.ingredients" />
        </div>
        <DirectionsList :directions="recipe?.directions" class="w-2/3" />
      </div>
    </div>
  </Page>
</template>
