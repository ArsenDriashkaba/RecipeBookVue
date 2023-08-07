import { useQuery } from '@tanstack/vue-query';

import { getIngredients } from '@/api/recipes';

export const useGetIngredientsQuery = () =>
  useQuery({
    queryKey: ['ingredients'],
    queryFn: getIngredients,
  });
