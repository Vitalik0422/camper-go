'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import Button from '../UI/Button/Button';
import RadioFilterGroup from './RadioFilterGroup/RadioFilterGroup';
import css from './SideBar.module.css';
import { getFilterCamper } from '@/lib/api/camperServices';
import SearchLocationForm from './SearchLocationForm/SearchLocationForm';
import { useActionState } from 'react';

const SideBar = () => {
  const { data } = useQuery({
    queryKey: ['filter'],
    queryFn: getFilterCamper,
  });

  const router = useRouter();
  const searchParams = useSearchParams();

  type FormState = string | null | undefined;
  const handleFilterChange = (
    _state: FormState,
    formData: FormData,
  ): FormState => {
    const params = new URLSearchParams(searchParams);

    formData.forEach((value, key) => {
      if (value) params.set(key, value.toString());
    });

    params.set('page', '1');
    router.push(`?${params.toString()}`);

    return null;
  };

  const handleResetFilter = () => router.push('/catalog');

  const [state, formAction] = useActionState(handleFilterChange, null);

  return (
    <aside className={css.sideBar}>
      <form action={formAction}>
        <SearchLocationForm label="Location" />
        <div className={css.radioGroupWrapper}>
          <legend className={css.filterText}>Filters</legend>
          {data && (
            <>
              <RadioFilterGroup
                legend="Camper form"
                options={data.forms}
                name="form"
              />
              <RadioFilterGroup
                legend="Engine"
                options={data.engines}
                name="engine"
              />
              <RadioFilterGroup
                legend="Transmission"
                options={data.transmissions}
                name="transmission"
              />
            </>
          )}
        </div>
        <div className={css.filterButtonWrapper}>
          <Button width={312} height={56} type="submit">
            Search
          </Button>
          <Button
            width={312}
            height={56}
            primary
            type="reset"
            onClick={handleResetFilter}
          >
            Clear filters
          </Button>
        </div>
      </form>
    </aside>
  );
};

export default SideBar;
