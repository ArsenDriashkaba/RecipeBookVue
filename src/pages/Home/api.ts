import { useQuery } from '@tanstack/vue-query';

import { getRecipes } from '@/api/recipes';

export const useGetRecipes = () =>
  useQuery({ queryKey: ['recipes'], queryFn: getRecipes });
