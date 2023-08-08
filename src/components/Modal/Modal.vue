<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';

import Message from '@/components/Message.vue';

type Emits = {
  (e: 'onClose'): void;
};
type Props = {
  title: string;
  isOpen?: boolean;
  isError?: boolean;
};

const emit = defineEmits<Emits>();
defineProps<Props>();
</script>

<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog @close="emit('onClose')" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                {{ title }}
              </DialogTitle>
              <div class="mt-4 mb-6">
                <slot />
              </div>
              <div class="w-full flex justify-end">
                <slot name="actions" />
              </div>
              <Message
                v-if="isError"
                text="Something went wrong !"
                status="error"
              />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
