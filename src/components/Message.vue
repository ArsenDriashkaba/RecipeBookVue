<script setup lang="ts">
const statuses = {
  success: 'success',
  error: 'error',
  info: 'info',
  warning: 'warning',
};

const statusStyles = {
  success: 'border-lime-600 text-lime-600',
  error: 'border-red-600 text-red-600',
  info: 'border-sky-600 text-sky-600',
  warning: 'border-amber-500 text-amber-500',
};

type Props = {
  text: string;
  status?: keyof typeof statuses;
};
withDefaults(defineProps<Props>(), {
  status: 'info',
});
</script>

<template>
  <p
    :class="[
      'p-5 m-2 border-solid border-2 font-bold w-full flex items-center justify-center h-fit',
      status && statusStyles[status],
    ]"
  >
    {{ text }}
  </p>
</template>
