import { Camper, Engine, Form, Transmission } from '@/types/camper';
import { Filters } from '@/types/filters';

export interface GetFilters {
  forms: Form[];
  transmissions: Transmission[];
  engines: Engine[];
}

export interface RequestCampers extends Filters {
  page?: number;
  perPage?: number;
}

export interface ResponseCampers {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: Camper[];
}

export interface Booking {
  name: string;
  email: string;
}
export interface RequestBooking {
  body: Booking;
  camperId: string;
}
export interface ResponseBooking {
  message: string;
}
