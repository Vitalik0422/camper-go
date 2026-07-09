import { Camper } from '@/types/camper';
import { instance } from '.';
import { GetFilters, RequestCampers, ResponseCampers } from './types';

export const getFilterCamper = async (): Promise<GetFilters> => {
  const response = await instance.get<GetFilters>('/filters');
  return response.data;
};

export const getCampers = async (
  page = 1,
  perPage = 4,
): Promise<ResponseCampers> => {
  const params: RequestCampers = {
    page,
    perPage,
  };

  const response = await instance.get<ResponseCampers>('/', { params: params });
  return response.data;
};

export const getCamper = async (id: string): Promise<Camper> => {
  const response = await instance.get<Camper>(`/${id}`);
  return response.data;
};
