<script setup lang="ts">
import Button from '@/components/Button.vue';
import Message from '@/components/Message.vue';
import router from '@/router';

type Props = {
  hasBackButton?: boolean;
  isError?: boolean;
  isLoading?: boolean;
};
withDefaults(defineProps<Props>(), {
  hasBackButton: true,
});
</script>

<template>
  <Button
    className="p-0"
    v-if="hasBackButton"
    variant="ghost"
    @click="router.go(-1)"
    >{{ '< Back' }}</Button
  >
  <Message
    text="Loading... Imagine some spinner or skeleton ._."
    v-if="isLoading"
  />
  <Message text="Something went wrong..." status="error" v-if="isError" />
  <slot v-else />
</template>
