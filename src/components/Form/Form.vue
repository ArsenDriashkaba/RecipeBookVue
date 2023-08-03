<script setup lang="ts" generic="Values">
import { FormOptions, useForm } from 'vee-validate';

type EmitProps = {
  onSubmit: Values;
};
type Props = {
  formOptions?: FormOptions<Values>;
};

const props = defineProps<Props>();

const emit = defineEmits<EmitProps>();

const form = useForm<Values>(props.formOptions);

const onSubmit = form.handleSubmit((values) => {
  emit('onSubmit', values);
});
</script>

<template>
  <form @submit="onSubmit">
    <slot />
  </form>
</template>
