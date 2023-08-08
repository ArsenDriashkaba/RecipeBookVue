<script setup lang="ts">
import { computed } from 'vue';

import Button from '@/components/Button.vue';
import { useFavoriteRecipesStore } from '@/stores/favoritesRecipes';

type Props = {
  recipeId?: string;
};

const props = defineProps<Props>();

const { toggleFavoriteState, getIsFavorite } = useFavoriteRecipesStore();
const buttonText = computed(() =>
  getIsFavorite(props.recipeId) ? 'Remove from favorites' : 'Add to favorites',
);
</script>

<template>
  <Button @click="toggleFavoriteState(recipeId)" variant="secondary">{{
    buttonText
  }}</Button>
</template>
