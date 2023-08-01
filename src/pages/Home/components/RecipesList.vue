<script setup lang="ts">
import Message from '@/components/Message.vue';
import RecipeCard from '@/pages/Home/components/RecipeCard.vue';
import type { Recipe } from '@/types/recipe';

type Props = {
  recipes?: Recipe[];
};

defineProps<Props>();
</script>

<template>
  <div
    v-if="recipes?.length"
    class="grid xl:grid-cols-5 sm:grid-cols-3 md:grid-cols-4 gap-4 shadow-md p-5"
  >
    <RecipeCard v-for="recipe in recipes" :recipe="recipe" :key="recipe?._id" />
  </div>
  <Message text="No recipes have been found :c" v-else />
</template>

<style scoped></style>
