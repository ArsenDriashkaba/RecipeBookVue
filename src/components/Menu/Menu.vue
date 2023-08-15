<script setup lang="ts" generic="Value">
import { Menu, MenuButton, MenuItems } from '@headlessui/vue';

import Button from '@/components/Button.vue';

type Props = {
  title: string;
};

withDefaults(defineProps<Props>(), {});
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <MenuButton :as="Button" variant="ghost" iconName="translate">
      {{ title }}
    </MenuButton>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none px-1 py-1"
      >
        <slot />
      </MenuItems>
    </transition>
  </Menu>
</template>
