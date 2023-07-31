import { useQuery } from '@tanstack/vue-query';

import { getRecipes } from '@/api/recipes';

export const useGetRecipesQuery = () =>
  useQuery({ queryKey: ['recipes'], queryFn: getRecipes });
