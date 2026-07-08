import { Camper } from '@/types/camper';

export interface GetFilters {
  forms: string[];
  transmissions: string[];
  engines: string[];
}
interface Filters {
  location: string;
  form: string;
  transmission: string;
  engine: string;
}

export interface RequestCampers {
  page: number;
  perPage: number;
  filters?: Filters;
}

export interface ResponseCampers {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: Camper[];
}
