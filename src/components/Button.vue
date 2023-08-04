<script setup lang="ts">
type Variant = 'primary' | 'secondary' | 'gost';

const styleVariants = {
  primary: 'bg-newOrange text-white hover:text-dark',
  secondary:
    'border border-4 border-solid border-newOrange text-newOrange hover:text-white',
  ghost: 'text-newOrange',
};

type Props = {
  variant?: Variant;
  type?: HTMLInputElement['type'];
};

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  type: 'button',
});
</script>

<template>
  <button
    :class="[
      'hover:scale-110 transition ease-in-out py-2 px-5 text-md font-semibold',
      styleVariants[variant],
    ]"
    :type="type"
  >
    <slot />
  </button>
</template>
