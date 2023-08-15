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
  props.directions
    .replace(regexp, '')
    .split('\n')
    .filter((line) => !!line),
);
</script>

<template>
  <ol v-if="directions">
    <li
      v-for="(direction, index) in directionsList"
      :key="index"
      class="flex gap-5 py-2"
    >
      <div
        class="bg-newYellow rounded-full w-6 h-6 shrink-0 flex justify-center items-center"
      >
        {{ index + 1 }}
      </div>
      {{ direction }}
    </li>
  </ol>
  <Message :text="$t('common.noDirections')" v-else />
</template>
