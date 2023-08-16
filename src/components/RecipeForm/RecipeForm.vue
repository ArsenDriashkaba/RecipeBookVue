<script setup lang="ts">
import { useTranslation } from 'i18next-vue';
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

const { t } = useTranslation();
const { data: ingredients } = useGetIngredientsQuery();

const validationSchema = yup.object().shape({
  title: yup.string().required(t('common.nameValidationMsg')).min(3).max(100),
  preparationTime: yup
    .number()
    .required(t('common.preparationTimeValidationMsg'))
    .min(1),
  servingCount: yup.number(),
  directions: yup.string().required(t('common.directionsValidationMsg')).min(3),
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
      <Button v-if="hasCancelButton" @click="emit('onCancel')" variant="ghost">
        {{ $t('common.cancel') }}
      </Button>
      <Button type="submit" :isLoading="isLoading">
        {{ $t('common.submit') }}
      </Button>
    </div>
    <div class="flex gap-2 flex-col xs:flex-row">
      <div class="xs:w-1/2 border-2 my-3 p-3">
        <InputField
          :label="$t('common.name')"
          name="title"
          isRequired
          :placeholder="$t('common.recipeNamePlaceholder')"
        />
        <InputField
          :label="$t('common.preparationTime')"
          name="preparationTime"
          isRequired
          type="number"
          :placeholder="$t('common.preparationTimePlaceholder')"
        />
        <InputField
          :label="$t('common.servingCount')"
          name="servingCount"
          type="number"
        />

        <TextAreaField
          :label="$t('common.directions')"
          name="directions"
          isRequired
          :placeholder="$t('common.directionsPlaceholder')"
        />
      </div>
      <AddIngredientList :ingredients="ingredients" class="xs:w-1/2" />
    </div>
  </Form>
</template>
