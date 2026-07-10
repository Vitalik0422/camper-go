import { Camper, Review } from '@/types/camper';
import { instance } from '.';
import {
  GetFilters,
  RequestBooking,
  RequestCampers,
  ResponseCampers,
} from './types';

export const getFilterCamper = async (): Promise<GetFilters> => {
  const response = await instance.get<GetFilters>('/filters');
  return response.data;
};

export const getCampers = async (
  params: RequestCampers,
): Promise<ResponseCampers> => {
  params.perPage = 4;
  const response = await instance.get<ResponseCampers>('/', { params: params });
  return response.data;
};

export const getCamper = async (id: string): Promise<Camper> => {
  const response = await instance.get<Camper>(`/${id}`);
  return response.data;
};

export const getReviews = async (id: string): Promise<Review[]> => {
  const response = await instance.get<Review[]>(`/${id}/reviews`);
  return response.data;
};

export const postBooking = async ({ body, camperId }: RequestBooking) => {
  const response = await instance.post(`/${camperId}/booking-requests`, body);
  return response.data;
};
