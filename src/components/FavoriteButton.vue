<script setup lang="ts">
import { computed, Ref } from 'vue';

import Button from '@/components/Button.vue';
import { IconName } from '@/components/Icon/icons';
import IconButton from '@/components/IconButton.vue';
import { useFavoriteRecipesStore } from '@/stores/favoritesRecipes';
import { useTranslation } from 'i18next-vue';

type Props = {
  recipeId: string;
  isIconButton?: boolean;
};

const props = defineProps<Props>();

const { t } = useTranslation();
const { toggleFavoriteState, getIsFavorite } = useFavoriteRecipesStore();
const isFavourite = computed(() => getIsFavorite(props.recipeId));
const buttonText = computed(() =>
  isFavourite.value
    ? t('common.removeFromFavorites')
    : t('common.addToFavorites'),
);
const iconName: Ref<IconName> = computed(() =>
  isFavourite.value ? 'likeFill' : 'likeOutline',
);

const handleClick = (e) => {
  e.stopPropagation();
  toggleFavoriteState(props.recipeId);
};
</script>

<template>
  <IconButton
    :name="iconName"
    v-if="isIconButton"
    @click.stop.prevent="handleClick"
  />
  <Button @click.stop.prevent="handleClick" variant="secondary" v-else>
    {{ buttonText }}
  </Button>
</template>
