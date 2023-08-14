<script setup lang="ts">
import Button from '@/components/Button.vue';
import Message from '@/components/Message.vue';
import Spinner from '@/components/Spinner.vue';
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
    iconName="backArrow"
    v-if="hasBackButton"
    variant="ghost"
    @click="router.go(-1)"
    className="!px-0"
  >
    Back
  </Button>
  <div class="w-full flex items-center justify-center" v-if="isLoading">
    <Spinner message="Loading..." />
  </div>
  <Message text="Something went wrong..." status="error" v-if="isError" />
  <slot v-else />
</template>
