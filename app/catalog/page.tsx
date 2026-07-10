import { getCampers } from '@/lib/api/camperServices';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import Cabinet from './CatalogPage.client';

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

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Cabinet />
    </HydrationBoundary>
  );
};

export default Catalog;
