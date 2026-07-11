'use client';
import css from './CatalogPage.module.css';
import Catalog from '@/components/Catalog/Campers';
import Loader from '@/components/Loader/Loader';
import NotFoundCampers from '@/components/NotFoundCampers/NotFoundCampers';
import SideBar from '@/components/SideBar/SideBar';
import Button from '@/components/UI/Button/Button';
import { getCampers } from '@/lib/api/camperServices';
import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

interface Filters {
  page?: number;
  engine?: string;
  form?: string;
  transmission?: string;
}
const CatalogPage = () => {
  const searchParams = useSearchParams();
  const filters: Filters = Object.fromEntries(
    searchParams.entries(),
  ) as Filters;

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
    isFetching,
  } = useInfiniteQuery({
    queryKey: ['catalog', { filters }],
    queryFn: ({ pageParam }) => getCampers({ ...filters, page: pageParam }),
    placeholderData: keepPreviousData,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage.totalPages >= nextPage ? nextPage : undefined;
    },
    refetchOnMount: true,
  });
  const handleLoadMore = () => {
    fetchNextPage();
  };

  const campers = data?.pages.flatMap((page) => page.campers) ?? [];

  return (
    <>
      {isFetching && <Loader />}
      <SideBar />
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
      {!campers.length && !isPending && <NotFoundCampers />}
    </>
  );
};

export default CatalogPage;
