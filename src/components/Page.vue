<script setup lang="ts">
import IconButton from '@/components/IconButton.vue';
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
  <IconButton
    name="backArrow"
    v-if="hasBackButton"
    @click="router.go(-1)"
    className="!px-0"
  />
  <Message
    text="Loading... Imagine some spinner or skeleton ._."
    v-if="isLoading"
  />
  <Message text="Something went wrong..." status="error" v-if="isError" />
  <slot v-else />
</template>
