<script setup lang="ts">
import Button from '@/components/Button.vue';
import Modal from '@/components/Modal/Modal.vue';
import { useDeleteRecipeMutation } from '@/pages/RecipeDetail/api';
import router from '@/router';
import { routes } from '@/router/routes';

type Props = {
  recipeId?: string;
};

const props = defineProps<Props>();
const emit = defineEmits(['onClose']);

const { mutate, isLoading, isError } = useDeleteRecipeMutation(props.recipeId);

const handleSubmit = () => {
  if (!props.recipeId) {
    return;
  }

  mutate(undefined, {
    onSuccess: () => router.push(routes.home),
  });
};
</script>

<template>
  <Modal :title="$t('common.deleteRecipeQ')" :isError="isError">
    <p>{{ $t('common.deleteRecipeMsg') }}</p>

    <template v-slot:actions>
      <div class="flex">
        <Button variant="ghost" @click="emit('onClose')">{{
          $t('common.cancel')
        }}</Button>
        <Button @click="handleSubmit" :isLoading="isLoading">{{
          $t('common.submit')
        }}</Button>
      </div>
    </template>
  </Modal>
</template>
