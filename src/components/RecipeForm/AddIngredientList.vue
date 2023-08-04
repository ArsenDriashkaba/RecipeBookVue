<script setup lang="ts">
import { computed, ComputedRef } from 'vue';
import { useFieldArray, useFieldValue } from 'vee-validate';

import Button from '@/components/Button.vue';
import InputField from '@/components/Form/Fields/InputField.vue';
import SelectField from '@/components/Form/Fields/SelectField.vue';
import type { SelectOption } from '@/components/SelectInput.vue';
import type { Ingredient } from '@/types/recipe';

type Props = {
  ingredients?: string[];
};

const props = withDefaults(defineProps<Props>(), {
  ingredients: [],
});

const { remove, push, fields } =
  useFieldArray<Omit<Ingredient, '_id'>>('ingredients');
const newIngredient = useFieldValue('newIngredient');

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
};
</script>

<template>
  <div class="border-2 border-accent m-3 p-3">
    <div
      v-for="(ingredient, index) in fields.values()"
      :key="index"
      class="flex border-2 gap-2 p-2 items-center"
    >
      {{ ingredient.value.name }}
      <Button @click="remove(index)">Remove</Button>
    </div>

    <SelectField
      :options="ingredientsOptions"
      name="newIngredient.name"
      label="Name"
    />
    <InputField name="newIngredient.amountUnit" label="Amount unit" />
    <InputField name="newIngredient.amount" type="number" label="Amount" />
    <Button @click="handleAddNewIngredient">Add ingredient</Button>
  </div>
</template>
