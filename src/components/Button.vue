<script setup lang="ts">
import { computed } from 'vue';

import Icon from '@/components/Icon/Icon.vue';
import type { IconName } from '@/components/Icon/icons';
import Spinner from '@/components/Spinner.vue';

const styleVariants = {
  primary: 'bg-newOrange text-white',
  secondary: 'border border-2 border-solid border-newOrange text-newOrange',
  ghost: 'text-newOrange',
};

export type ButtonProps = {
  variant?: keyof typeof styleVariants;
  type?: HTMLButtonElement['type'];
  iconName?: IconName;
  isLoading?: boolean;
  className?: string;
};

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  type: 'button',
});

const spinnerStyle = computed(() => props.variant === 'primary' && 'white');
</script>

<template>
  <button
    :class="[
      'hover:scale-105 transition ease-in-out py-2 px-5 text-md font-semibold flex items-center whitespace-nowrap',
      styleVariants[variant],
      className,
    ]"
    :type="type"
  >
    <slot />
    <Icon
      :name="iconName"
      v-if="iconName && !isLoading"
      class="ml-2"
      size="sm"
    />
    <Spinner v-if="isLoading" :variant="spinnerStyle" size="sm" />
  </button>
</template>
