<script setup lang="ts">
import * as yup from 'yup';

import Button from '@/components/Button.vue';
import InputField from '@/components/Form/Fields/InputField.vue';
import TextAreaField from '@/components/Form/Fields/TextAreaField.vue';
import Form from '@/components/Form/Form.vue';
import AddIngredientList from '@/components/RecipeForm/AddIngredientList.vue';
import { useGetIngredientsQuery } from '@/components/RecipeForm/api';
import type { Recipe } from '@/types/recipe';

type Props = {
  initialValues?: Recipe;
  hasCancelButton?: boolean;
  isLoading?: boolean;
};

defineProps<Props>();
const emit = defineEmits(['onCancel']);

const { data: ingredients } = useGetIngredientsQuery();

const validationSchema = yup.object().shape({
  title: yup.string().required().min(3).max(100),
  preparationTime: yup
    .number()
    .required(
      'Preparation time is required field. Please enter a number of minutes',
    )
    .min(1),
  servingCount: yup.number(),
  directions: yup.string().required().min(3),
  ingredients: yup.array().of(
    yup.object().shape({
      name: yup.string().required().min(3).max(100),
      amount: yup.number(),
      amountUnit: yup.string(),
    }),
  ),
});
</script>

<template>
  <Form
    class="w-full"
    :formOptions="{ validationSchema, initialValues }"
    autocomplete="off"
  >
    <div class="flex w-full gap-2 items-center py-2 justify-end">
      <Button v-if="hasCancelButton" @click="emit('onCancel')" variant="ghost"
        >Cancel</Button
      >
      <Button type="submit" :isLoading="isLoading">Submit</Button>
    </div>
    <div class="flex gap-2">
      <div class="w-1/2 border-2 my-3 p-3">
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
          placeholder="Enter time in minutes..."
        />
        <InputField label="Serving count" name="servingCount" type="number" />

        <TextAreaField
          label="Directions"
          name="directions"
          isRequired
          placeholder="Use enter to define unique steps..."
        />
      </div>
      <AddIngredientList :ingredients="ingredients" class="w-1/2" />
    </div>
  </Form>
</template>
