import { cleanFilters } from './cleanFilters';
import { Filters } from '@/types/filters';

export const buildCatalogQueryKey = (filters: Filters) => {
  return ['catalog', cleanFilters(filters)] as const;
};
