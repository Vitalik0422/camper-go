'use client';
import Catalog from '@/components/Campers/Campers';
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
  return <Catalog data={data} />;
};

export default Cabinet;
