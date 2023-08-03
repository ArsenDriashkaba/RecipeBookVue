<script setup lang="ts">
export type InputProps = {
  type?: string;
  placeholder?: string;
};

withDefaults(defineProps<InputProps>(), {
  type: 'text',
});
</script>

<template>
  <input class="" :placeholder="placeholder" :type="type" />
</template>
