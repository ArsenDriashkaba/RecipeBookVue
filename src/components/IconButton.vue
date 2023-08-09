<script setup lang="ts">
import Button, { ButtonProps } from '@/components/Button.vue';
import Icon, { IconProps } from '@/components/Icon/Icon.vue';

type Props = IconProps & Omit<ButtonProps, 'variant'>;

defineProps<Props>();
</script>

<template>
  <Button :type="type" :className="className" variant="ghost">
    <Icon :name="name" :size="size" :variant="variant" />
  </Button>
</template>
