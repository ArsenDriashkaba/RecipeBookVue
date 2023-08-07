<script setup lang="ts">
import Message from '@/components/Message.vue';

type Props = {
  hasBackButton?: boolean;
  isError?: boolean;
  isLoading?: boolean;
};
withDefaults(defineProps<Props>(), {});
</script>

<template>
  <Message
    text="Loading... Imagine some spinner or skeleton ._."
    v-if="isLoading"
  />
  <Message text="Something went wrong..." status="error" v-if="isError" />
  <slot v-else />
</template>
