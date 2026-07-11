import { Camper } from '@/types/camper';

export interface GetFilters {
  forms: string[];
  transmissions: string[];
  engines: string[];
}

export interface RequestCampers {
  page?: number;
  perPage?: number;
  location?: string;
  form?: string;
  transmission?: string;
  engine?: string;
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
