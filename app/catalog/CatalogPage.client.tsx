'use client';
import Catalog from '@/components/Catalog/Campers';
import Loader from '@/components/Loader/Loader';
import NotFoundCampers from '@/components/NotFoundCampers/NotFoundCampers';
import { getCampers } from '@/lib/api/camperServices';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

interface Params {
  page?: number;
  engine?: string;
  form?: string;
  transmission?: string;
}

const CatalogPage = () => {
  const searchParams = useSearchParams();
  const params: Params = Object.fromEntries(searchParams.entries()) as Params;

  const { data, isPending } = useQuery({
    queryKey: [
      'catalog',
      {
        params,
      },
    ],
    queryFn: () => getCampers(params),
  });
  console.log();

  if (!data?.campers.length && !isPending) return <NotFoundCampers />;
  return (
    <>
      {isPending && <Loader />}
      {data?.campers && <Catalog data={data} />}
    </>
  );
};

export default CatalogPage;
