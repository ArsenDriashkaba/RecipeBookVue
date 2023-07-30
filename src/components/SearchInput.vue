<script setup lang="ts">
type Props = {
  searchValue: string;
};

defineProps<Props>();
</script>

<template>
  <input type="text" :value="searchValue" />
</template>
