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
};

defineProps<Props>();

const { data: ingredients } = useGetIngredientsQuery();

const validationSchema = yup.object().shape({
  title: yup.string().required().min(3).max(100),
  preparationTime: yup.number().required().min(1),
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
    <div class="flex">
      <div class="w-1/2">
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
      </div>
      <AddIngredientList :ingredients="ingredients" class="w-1/2" />
    </div>

    <Button type="submit">Submit</Button>
  </Form>
</template>
