<script setup lang="ts">
import { computed } from 'vue';

import Message from '@/components/Message.vue';

type Props = {
  directions?: string;
};
const props = withDefaults(defineProps<Props>(), {
  directions: '',
});
const regexp = /\d+\./g;
const directionsList = computed(() =>
  props.directions.replace(regexp, '').split('\n'),
);
</script>

<template>
  <ol v-if="directions">
    <li v-for="(direction, index) in directionsList" :key="index">
      {{ direction }}
    </li>
  </ol>
  <Message text="No directions" v-else />
</template>
