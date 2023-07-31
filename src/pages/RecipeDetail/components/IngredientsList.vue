<script setup lang="ts">
import Message from '@/components/Message.vue';
import type { Ingredient } from '@/types/recipe';

type Props = {
  ingredients?: Ingredient[];
};

defineProps<Props>();
</script>

<template>
  <table v-if="ingredients?.length">
    <tr v-for="ingredient in ingredients" :key="ingredient._id">
      <td>{{ ingredient.name }}</td>
      <td>{{ ingredient.amount }}</td>
      <td>{{ ingredient.amountUnit }}</td>
    </tr>
  </table>
  <Message text="No ingredients" v-else />
</template>
