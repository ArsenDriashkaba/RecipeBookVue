<script setup lang="ts">
export type TextAreaProps = {
  placeholder?: string;
};

defineProps<TextAreaProps>();
</script>

<template>
  <textarea class="" :placeholder="placeholder" />
</template>
