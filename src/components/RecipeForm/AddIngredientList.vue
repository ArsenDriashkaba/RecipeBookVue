<script setup lang="ts">
import { computed, ComputedRef } from 'vue';
import { useFieldArray, useFieldValue, useSetFieldValue } from 'vee-validate';

import Button from '@/components/Button.vue';
import InputField from '@/components/Form/Fields/InputField.vue';
import SelectField from '@/components/Form/Fields/SelectField.vue';
import type { SelectOption } from '@/components/SelectInput.vue';
import type { AddRecipeIngredient } from '@/types/recipe';

const emptyIngredient: AddRecipeIngredient = {
  amount: null,
  name: '',
  amountUnit: '',
};

type Props = {
  ingredients?: string[];
};

const props = withDefaults(defineProps<Props>(), {
  ingredients: () => [],
});

const { remove, push, fields } =
  useFieldArray<AddRecipeIngredient>('ingredients');
const newIngredient = useFieldValue<AddRecipeIngredient>('newIngredient');
const setFieldValue = useSetFieldValue('newIngredient');

const ingredientsOptions: ComputedRef<SelectOption[]> = computed(() =>
  props.ingredients.map((ingredient) => {
    return { value: ingredient, label: ingredient };
  }),
);

const handleAddNewIngredient = () => {
  if (!newIngredient.value.name) {
    return;
  }

  push(newIngredient.value);
  setFieldValue(emptyIngredient);
};
</script>

<template>
  <div class="border-2 my-3 p-3">
    <p class="border-b-2 mb-5">Add new ingredient</p>

    <SelectField
      :options="ingredientsOptions"
      name="newIngredient.name"
      label="Name"
    />
    <InputField name="newIngredient.amount" type="number" label="Amount" />
    <InputField name="newIngredient.amountUnit" label="Amount unit" />
    <Button @click="handleAddNewIngredient" class="mb-10"
      >Add ingredient</Button
    >

    <p class="border-b-2 mb-5" v-if="fields.length">List of ingredients</p>
    <div
      v-for="({ value }, index) in fields.values()"
      :key="index"
      class="flex border-2 gap-2 p-2 items-center justify-between"
    >
      <span class="w-2/4">{{ value.name }}</span>
      <span class="w-1/4">{{ value.amount }}</span>
      <span class="w-1/4">{{ value.amountUnit }}</span>
      <Button @click="remove(index)" variant="ghost">X</Button>
    </div>
  </div>
</template>
