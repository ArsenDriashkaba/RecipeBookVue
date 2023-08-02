<script setup lang="ts">
type Props = {
  type?: HTMLInputElement['type'];
  required?: HTMLInputElement['required'];
  placeholder?: HTMLInputElement['placeholder'];
};

withDefaults(defineProps<Props>(), {
  type: 'text',
});
</script>

<template>
  <input :type="type" :required="required" :placeholder="placeholder" />
</template>
