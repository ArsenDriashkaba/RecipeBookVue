<script setup lang="ts">
import { OhVueIcon } from 'oh-vue-icons';

import type { IconName } from '@/components/Icon/icons';
import { icons } from '@/components/Icon/icons';

const sizes = {
  sm: 1,
  md: 1.5,
  lg: 2,
};

const variants = {
  dark: 'black',
  light: 'white',
};

type Props = {
  name: IconName;
  size?: keyof typeof sizes;
  variant?: keyof typeof variants;
};

withDefaults(defineProps<Props>(), {
  size: 'md',
  variant: 'dark',
});
</script>

<template>
  <OhVueIcon
    :name="icons[name]"
    :fill="variants[variant]"
    :scale="sizes[size]"
  />
</template>
