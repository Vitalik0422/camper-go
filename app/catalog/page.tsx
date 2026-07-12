export const dynamic = 'force-dynamic';
import { Suspense } from 'react';
import { getCampers, getFilterCamper } from '@/lib/api/camperServices';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { Metadata } from 'next';
import CatalogPage from './CatalogPage.client';
import { DEFAULT_FILTERS } from '@/lib/constants/filters';
import { buildCatalogQueryKey } from '@/lib/utils/buildCatalogQueryKey';
import { cleanFilters } from '@/lib/utils/cleanFilters';

export const metadata: Metadata = {
  title: 'Catalog | Campers',
  description:
    'Browse the Campers catalog, filter by preferences, and find the right camper for your next trip.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Catalog | Campers',
    description:
      'Browse the Campers catalog, filter by preferences, and find the right camper for your next trip.',
    type: 'website',
    siteName: 'Campers',
    url: process.env.NEXT_PUBLIC_BACKEND_URL,
    images: [
      {
        url: 'https://ac.goit.global/fullstack/career/campers/cruise-america-c-21/cruise-america-c-21-3.jpg',
        width: 1200,
        height: 630,
        alt: 'Catalog | Campers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catalog | Campers',
    description:
      'Browse the Campers catalog, filter by preferences, and find the right camper for your next trip.',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/career/campers/cruise-america-c-21/cruise-america-c-21-3.jpg',
        alt: 'Catalog | Campers',
      },
    ],
  },
};

const Catalog = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: buildCatalogQueryKey(DEFAULT_FILTERS),
    queryFn: ({ pageParam }) =>
      getCampers({ ...cleanFilters(DEFAULT_FILTERS), page: pageParam }),
    initialPageParam: 1,
  });

  await queryClient.prefetchQuery({
    queryKey: ['filter'],
    queryFn: getFilterCamper,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense>
        <CatalogPage />
      </Suspense>
    </HydrationBoundary>
  );
};

export default Catalog;
