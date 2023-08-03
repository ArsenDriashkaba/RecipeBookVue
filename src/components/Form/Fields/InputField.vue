<script setup lang="ts">
import BaseField, {
  BaseFieldProps,
} from '@/components/Form/Fields/BaseField.vue';
import Input, { InputProps } from '@/components/Input.vue';

type Props = InputProps & BaseFieldProps;

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
    <Input
      :placeholder="placeholder"
      :type="type"
      :value="field.value.value"
      @input="field.handleChange"
    />
  </BaseField>
</template>
