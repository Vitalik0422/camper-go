'use client';
import css from './CatalogPage.module.css';
import Catalog from '@/components/Catalog/Campers';
import Loader from '@/components/Loader/Loader';
import StateMessage from '@/components/NotFoundCampers/StateMessage';
import SideBar from '@/components/SideBar/SideBar';
import Button from '@/components/UI/Button/Button';
import { getCampers } from '@/lib/api/camperServices';
import { DEFAULT_FILTERS } from '@/lib/constants/filters';
import { cleanFilters } from '@/lib/utils/cleanFilters';
import { Filters } from '@/types/filters';
import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';

const CatalogPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filters: Filters = {
    ...DEFAULT_FILTERS,
    ...Object.fromEntries(searchParams.entries()),
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
    isFetching,
    isError,
    refetch,
  } = useInfiniteQuery({
    queryKey: ['catalog', { ...filters }],
    queryFn: ({ pageParam }) =>
      getCampers({ ...cleanFilters(filters), page: pageParam }),
    placeholderData: keepPreviousData,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage.totalPages >= nextPage ? nextPage : undefined;
    },
  });
  const handleLoadMore = () => {
    fetchNextPage();
  };

  const handleClearFilters = () => router.push('/catalog');
  const handleViewAll = () => router.push('/catalog');
  const handleRefetch = () => refetch();

  const campers = data?.pages.flatMap((page) => page.campers) ?? [];

  return (
    <>
      {isFetching && <Loader />}
      <SideBar />

      {isError && (
        <StateMessage
          title="Something went wrong"
          description="We couldn't load the campers. Please check your connection and try again."
        >
          <Button onClick={handleRefetch}>Try again</Button>
        </StateMessage>
      )}
      {!campers.length && !isPending && !isError && (
        <StateMessage
          title="No campers found"
          description="We couldn`t find any campers that match your filters. Try adjusting your search or clearing some filters."
        >
          <Button primary onClick={handleClearFilters}>
            Clear filters
          </Button>
          <Button type="button" onClick={handleViewAll}>
            View all campers
          </Button>
        </StateMessage>
      )}
      {campers.length > 0 && (
        <div className={css.catalogWrapper}>
          <Catalog data={campers} />
          {hasNextPage && (
            <Button
              primary
              onClick={handleLoadMore}
              disabled={isFetchingNextPage}
            >
              Load more
            </Button>
          )}
        </div>
      )}
    </>
  );
};

export default CatalogPage;
