<script setup lang="ts">
import { computed } from 'vue';
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/vue';

export type SelectOption = {
  label: string;
  value: string;
};

export type SelectProps = {
  options: SelectOption[];
  value: string;
};

export type Emits = {
  (e: 'change', value: string): void;
};

const props = defineProps<SelectProps>();
const emit = defineEmits<Emits>();

const filteredOptions = computed(() =>
  props.value === ''
    ? props.options
    : props.options.filter(({ label }) =>
        label.toLowerCase().includes(props.value.toLowerCase()),
      ),
);

const handleInputChange = (emitValue) => emit('change', emitValue);
</script>

<template>
  <Combobox :modelValue="value" @update:modelValue="handleInputChange">
    <ComboboxInput @input="handleInputChange" />
    <ComboboxOptions
      class="w-full py-2 max-h-36 overflow-y-scroll"
      v-if="filteredOptions.length"
    >
      <ComboboxOption
        v-for="({ label, value }, index) in filteredOptions"
        :key="index"
        :value="value"
        v-slot="{ active, selected }"
        class="relative"
      >
        <div
          :class="[
            'w-full py-1',
            active && 'bg-gray-100',
            selected && 'border-2',
          ]"
        >
          {{ label }}
        </div>
      </ComboboxOption>
    </ComboboxOptions>
  </Combobox>
</template>
