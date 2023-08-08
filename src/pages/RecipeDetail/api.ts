import { useMutation, useQuery } from '@tanstack/vue-query';

import { deleteRecipe, getRecipe, updateRecipe } from '@/api/recipes';
import type { AddRecipe } from '@/types/recipe';

export const useGetRecipeDetailQuery = (id: string) =>
  useQuery({
    queryKey: ['recipeDetail'],
    queryFn: () => getRecipe(id),
    enabled: !!id,
  });

export const useUpdateRecipeMutation = (id: string) =>
  useMutation({
    mutationKey: ['updateRecipe'],
    mutationFn: (recipe: AddRecipe) => updateRecipe(id, recipe),
    onSuccess: () => console.log('Recipe has been successfully updated!'),
  });

export const useDeleteRecipeMutation = (id: string) =>
  useMutation({
    mutationKey: ['deleteRecipe'],
    mutationFn: () => deleteRecipe(id),
    onSuccess: () => console.log('Recipe has been successfully deleted!'),
  });
