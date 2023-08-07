import { useMutation } from '@tanstack/vue-query';

import { addRecipe } from '@/api/recipes';
import type { AddRecipe } from '@/types/recipe';

export const useAddRecipeMutation = () =>
  useMutation({
    mutationKey: ['addRecipe'],
    mutationFn: (recipe: AddRecipe) => addRecipe(recipe),
    onSuccess: () => console.log('Recipe has been succesfully created!'),
  });
