'use client';
import css from './CatalogPage.module.css';
import Catalog from '@/components/Catalog/Campers';
import Loader from '@/components/Loader/Loader';
import NotFoundCampers from '@/components/NotFoundCampers/NotFoundCampers';
import SideBar from '@/components/SideBar/SideBar';
import { getCampers } from '@/lib/api/camperServices';
import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';
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

  return (
    <>
      {isPending && <Loader />}
      <SideBar />
      {data?.campers && <Catalog data={data} />}
      {!data?.campers.length && !isPending && <NotFoundCampers />}
    </>
  );
};

export default CatalogPage;
