'use client';
import Catalog from '@/components/Catalog/Campers';
import Loader from '@/components/Loader/Loader';
import { getCampers } from '@/lib/api/camperServices';
import { useQuery } from '@tanstack/react-query';

const Cabinet = () => {
  const { data } = useQuery({
    queryKey: [
      'catalog',
      {
        page: 1,
        perPage: 4,
        filters: { form: '', transmission: '', engine: '' },
      },
    ],
    queryFn: () => getCampers(),
  });

  return (
    <>
      <Loader />
      {data?.campers && <Catalog data={data} />}
    </>
  );
};

export default Cabinet;
