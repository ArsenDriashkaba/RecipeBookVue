import { useQuery } from '@tanstack/vue-query';

import { getRecipe } from '@/api/recipes';

export const useGetRecipeDetailQuery = (id: string) =>
  useQuery({
    queryKey: ['recipeDetail'],
    queryFn: () => getRecipe(id),
    enabled: !!id,
  });
