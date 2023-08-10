<script setup lang="ts">
import { computed, h } from 'vue';

import { createColumn } from '@/components/DataTable/createColumn';
import DataTable from '@/components/DataTable/DataTable.vue';
import FavoriteButton from '@/components/FavoriteButton.vue';
import type { Recipe } from '@/types/recipe';

type Props = {
  recipesData: Recipe[];
};

defineProps<Props>();

const column = createColumn<Recipe>();

const columns = computed(() => [
  column.accessor((row) => row.title, {
    id: 'title',
    header: 'Title',
    cell: (info) => info.getValue(),
    footer: (props) => props.column.id,
  }),
  column.accessor((row) => row.preparationTime, {
    id: 'preparationTime',
    header: 'Preparation time',
    cell: (info) => (info.getValue() ? `${info.getValue()} min` : '-'),
    footer: (props) => props.column.id,
  }),
  column.display({
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) =>
      h(FavoriteButton, {
        recipeId: row.original._id,
        class: 'w-full',
        isIconButton: true,
      }),
    footer: (props) => props.column.id,
  }),
]);
</script>

<template>
  <DataTable :data="recipesData" :columns="columns" />
</template>
