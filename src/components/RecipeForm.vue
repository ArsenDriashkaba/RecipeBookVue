<script setup lang="ts">
import Button from '@/components/Button.vue';
import InputField from '@/components/Form/Fields/InputField.vue';
import TextAreaField from '@/components/Form/Fields/TextAreaField.vue';
import Form from '@/components/Form/Form.vue';

const handleFormValues = (values) => {
  console.log({ values });
};
</script>

<template>
  <Form @onSubmit="handleFormValues" class="w-2/3">
    <InputField
      label="Name"
      name="title"
      isRequired
      placeholder="Recipe name..."
    />
    <InputField
      label="Preparation time"
      name="preparationTime"
      isRequired
      type="number"
    />
    <InputField label="Serving count" name="servingCount" type="number" />
    <TextAreaField label="Directions" name="directions" isRequired />
    <Button type="submit">Submit</Button>
  </Form>
</template>
