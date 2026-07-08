import { getCampers } from '@/lib/api/camperServices';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import Cabinet from './Catalog.client';

const Catalog = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [
      'catalog',
      {
        page: 1,
        perPage: 4,
        filters: { form: '', transmission: '', engine: '' },
      },
    ],
    queryFn: () => getCampers(1, 4),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Cabinet />
    </HydrationBoundary>
  );
};

export default Catalog;
