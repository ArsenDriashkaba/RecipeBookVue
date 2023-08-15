<script setup lang="ts">
import { computed, h } from 'vue';
import { useTranslation } from 'i18next-vue';
import { RouterLink } from 'vue-router';

import { createColumn } from '@/components/DataTable/createColumn';
import DataTable from '@/components/DataTable/DataTable.vue';
import FavoriteButton from '@/components/FavoriteButton.vue';
import Message from '@/components/Message.vue';
import { routes } from '@/router/routes';
import type { Recipe } from '@/types/recipe';

type Props = {
  recipesData: Recipe[];
};

defineProps<Props>();

const { t } = useTranslation();

const column = createColumn<Recipe>();

const titleCell = (recipeId: string, title: string) =>
  h(
    RouterLink,
    {
      class: 'py-2 w-full hover:bg-gray-100',
      to: routes.recipeDetail(recipeId),
    },
    () => [title],
  );

const favoriteButtonCell = (recipeId: string) =>
  h(FavoriteButton, {
    recipeId,
    isIconButton: true,
  });

const columns = computed(() => [
  column.accessor((row) => row.title, {
    id: 'title',
    header: t('common.name'),
    cell: ({ row, getValue }) => titleCell(row.original._id, getValue?.()),
    footer: (props) => props.column.id,
  }),
  column.accessor((row) => row.preparationTime, {
    id: 'preparationTime',
    header: t('common.preparationTime'),
    cell: (info) => (info.getValue() ? `${info.getValue()} min` : '-'),
    footer: (props) => props.column.id,
  }),
  column.display({
    id: 'actions',
    header: t('common.actions'),
    cell: ({ row }) => favoriteButtonCell(row.original._id),
    footer: (props) => props.column.id,
  }),
]);
</script>

<template>
  <DataTable :data="recipesData" :columns="columns" v-if="recipesData.length" />
  <Message :text="$t('home.noRecipes')" v-else />
</template>
