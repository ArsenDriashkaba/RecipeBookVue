<script setup lang="ts">
import BaseField, {
  BaseFieldProps,
} from '@/components/Form/Fields/BaseField.vue';
import TextArea, { TextAreaProps } from '@/components/TextArea.vue';

type Props = TextAreaProps & BaseFieldProps;

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
    <TextArea
      :placeholder="placeholder"
      :type="type"
      :value="field.value.value"
      @input="field.handleChange"
    />
  </BaseField>
</template>
