<script setup lang="ts">
const styleVariants = {
  primary: 'bg-newOrange text-white hover:text-dark',
  secondary: 'border border-2 border-solid border-newOrange text-newOrange',
  ghost: 'text-newOrange',
};

export type ButtonProps = {
  variant?: keyof typeof styleVariants;
  type?: HTMLInputElement['type'];
  className?: string;
};

withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  type: 'button',
});
</script>

<template>
  <button
    :class="[
      'hover:scale-110 transition ease-in-out py-2 px-5 text-md font-semibold',
      styleVariants[variant],
      className,
    ]"
    :type="type"
  >
    <slot />
  </button>
</template>
