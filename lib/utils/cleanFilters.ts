import { Filters } from '@/types/filters';

export const cleanFilters = (filters: Partial<Filters>) => {
  return Object.fromEntries(
    Object.entries(filters).filter(
      ([, value]) => value !== '' && value != null,
    ),
  );
};
