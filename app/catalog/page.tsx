import { getCampers, getFilterCamper } from '@/lib/api/camperServices';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import CatalogPage from './CatalogPage.client';

const Catalog = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [
      'catalog',
      {
        page: 1,
        perPage: 4,
        location: '',
        form: '',
        transmission: '',
        engine: '',
      },
    ],
    queryFn: () => getCampers({ page: 1 }),
  });

  await queryClient.prefetchQuery({
    queryKey: ['filter'],
    queryFn: getFilterCamper,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CatalogPage />
    </HydrationBoundary>
  );
};

export default Catalog;
