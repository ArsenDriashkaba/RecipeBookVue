<script setup lang="ts">
import BaseField, {
  BaseFieldProps,
} from '@/components/Form/Fields/BaseField.vue';
import type { SelectProps } from '@/components/SelectInput.vue';
import SelectInput from '@/components/SelectInput.vue';

type Props = Pick<SelectProps<any>, 'options'> & BaseFieldProps;

defineProps<Props>();
</script>

<template>
  <BaseField
    :name="name"
    :label="label"
    :id="id"
    :isRequired="isRequired"
    v-slot="{ field }"
  >
    <SelectInput
      :value="field.value.value"
      @change="field.handleChange"
      :options="options"
    />
  </BaseField>
</template>
