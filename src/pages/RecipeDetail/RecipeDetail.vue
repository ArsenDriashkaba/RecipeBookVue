<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';

import foodPlaceholder from '@/assets/food-placeholder.png';
import Button from '@/components/Button.vue';
import RecipeForm from '@/components/RecipeForm/RecipeForm.vue';
import { useGetRecipeDetailQuery } from '@/pages/RecipeDetail/api';
import DirectionsList from '@/pages/RecipeDetail/components/DirectionsList.vue';
import IngredientsList from '@/pages/RecipeDetail/components/IngredientsList.vue';

const isEditMode = ref(false);

const route = useRoute();
const recipeId: string = route.params?.id as string;
const { data: recipe } = useGetRecipeDetailQuery(recipeId);
</script>

<template>
  <div v-if="isEditMode">
    <h1>Here we will edit our form component!</h1>
    <RecipeForm />
  </div>
  <div v-else>
    <div class="pt-10 pb-5 mb-5 flex items-center justify-between border-b-2">
      <h1 class="text-4xl">{{ recipe?.title }}</h1>
      <Button @click="isEditMode = true">Edit</Button>
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
        <img :src="foodPlaceholder" alt="foodPlaceholder" class="w-full mb-6" />
        <IngredientsList :ingredients="recipe?.ingredients" />
      </div>
      <DirectionsList :directions="recipe?.directions" class="w-2/3" />
    </div>
  </div>
</template>
