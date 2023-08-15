<script setup lang="ts">
import { MenuItem } from '@headlessui/vue';
</script>

<template>
  <MenuItem v-slot="{ active }">
    <div
      :class="[
        active ? 'bg-newOrange text-white' : 'text-gray-900',
        'group flex w-full items-center rounded-md px-2 py-2 text-sm cursor-pointer',
      ]"
    >
      <slot />
    </div>
  </MenuItem>
</template>
