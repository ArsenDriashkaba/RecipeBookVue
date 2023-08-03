<script setup lang="ts" generic="T">
import { computed } from 'vue';
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/vue';

type SelectOption<T> = {
  label: string;
  value: T;
};

export type SelectProps<T> = {
  options: SelectOption<T>[];
  value: string;
};

export type EmitProps = {
  change: any;
};

const props = defineProps<SelectProps<T>>();
const emit = defineEmits<EmitProps>();

const filteredOptions = computed(() =>
  props.value === ''
    ? props.options
    : props.options.filter(({ label }) => {
        return label.toLowerCase().includes(props.value.toLowerCase());
      }),
);

const handleChange = (event) => emit('change', event);
</script>

<template>
  <Combobox>
    <ComboboxInput @input="handleChange" />
    <ComboboxOptions>
      <ComboboxOption
        v-for="({ label, value }, index) in filteredOptions"
        :key="index"
        :value="value"
      >
        {{ label }}
      </ComboboxOption>
    </ComboboxOptions>
  </Combobox>
</template>
