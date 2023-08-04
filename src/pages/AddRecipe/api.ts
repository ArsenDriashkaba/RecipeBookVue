import { useMutation, useQuery } from '@tanstack/vue-query';

import { addRecipe, getIngredients } from '@/api/recipes';
import type { AddRecipe } from '@/types/recipe';

export const useGetIngredientsQuery = () =>
  useQuery({
    queryKey: ['ingredients'],
    queryFn: getIngredients,
  });

export const useAddRecipeMutation = () =>
  useMutation({
    mutationKey: ['addRecipe'],
    mutationFn: (recipe: AddRecipe) => addRecipe(recipe),
    onSuccess: () => console.log('Recipe has been succesfully created!'),
  });
