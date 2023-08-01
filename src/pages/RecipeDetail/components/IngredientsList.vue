<script setup lang="ts">
import Message from '@/components/Message.vue';
import type { Ingredient } from '@/types/recipe';

const tableCellStyle = 'py-2 px-1';

type Props = {
  ingredients?: Ingredient[];
};

defineProps<Props>();
</script>

<template>
  <table v-if="ingredients?.length" class="table-fixed w-full">
    <tr
      v-for="ingredient in ingredients"
      :key="ingredient._id"
      class="border-b-2"
    >
      <td :class="[tableCellStyle, 'w-3/5']">{{ ingredient.name }}</td>
      <td :class="[tableCellStyle, 'w-1/5']">{{ ingredient.amount }}</td>
      <td :class="[tableCellStyle, 'w-1/5 text-end']">
        {{ ingredient.amountUnit }}
      </td>
    </tr>
  </table>
  <Message text="No ingredients" v-else />
</template>
