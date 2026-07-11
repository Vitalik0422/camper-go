import { Camper, Review } from '@/types/camper';
import { instance } from '.';
import {
  GetFilters,
  RequestBooking,
  RequestCampers,
  ResponseBooking,
  ResponseCampers,
} from './types';

export const getFilterCamper = async (): Promise<GetFilters> => {
  const response = await instance.get<GetFilters>('/filters');
  return response.data;
};

export const getCampers = async (
  params: RequestCampers,
): Promise<ResponseCampers> => {
  const query = { ...params, perPage: 4 };
  const response = await instance.get<ResponseCampers>('/', { params: query });
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

export const postBooking = async ({
  body,
  camperId,
}: RequestBooking): Promise<ResponseBooking> => {
  const response = await instance.post<ResponseBooking>(
    `/${camperId}/booking-requests`,
    body,
  );
  return response.data;
};
