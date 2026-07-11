'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import Button from '../UI/Button/Button';
import RadioFilterGroup from './RadioFilterGroup/RadioFilterGroup';
import css from './SideBar.module.css';
import { getFilterCamper } from '@/lib/api/camperServices';
import SearchLocationForm from './SearchLocationForm/SearchLocationForm';
import { useActionState, useState } from 'react';

interface FilterValue {
  location?: string;
  form?: string;
  engine?: string;
  transmission?: string;
}

const SideBar = () => {
  const { data } = useQuery({
    queryKey: ['filter'],
    queryFn: getFilterCamper,
  });
  const router = useRouter();

  const searchParams = useSearchParams();
  const params = Object.fromEntries(searchParams.entries()) as FilterValue;

  const [filter, setFilter] = useState<FilterValue>(() => params);

  type FormState = string | null | undefined;
  const handleFilterChange = (
    _state: FormState,
    formData: FormData,
  ): FormState => {
    const params = new URLSearchParams(searchParams);

    formData.forEach((value, key) => {
      if (value) {
        params.set(key, value.toString());
        setFilter((prev) => ({ ...prev, [key]: value.toString() }));
      }
    });

    router.push(`?${params.toString()}`);

    return null;
  };

  const handleResetFilter = () => {
    setFilter({});
    router.push('/catalog');
  };

  const [state, formAction] = useActionState(handleFilterChange, null);

  return (
    <aside className={css.sideBar}>
      <form action={formAction}>
        <SearchLocationForm
          label="Location"
          defaultValue={filter.location || ''}
        />
        <div className={css.radioGroupWrapper}>
          <legend className={css.filterText}>Filters</legend>
          {data && (
            <>
              <RadioFilterGroup
                legend="Camper form"
                options={data.forms}
                name="form"
                value={filter?.form || ''}
              />
              <RadioFilterGroup
                legend="Engine"
                options={data.engines}
                name="engine"
                value={filter?.engine || ''}
              />
              <RadioFilterGroup
                legend="Transmission"
                options={data.transmissions}
                name="transmission"
                value={filter?.transmission || ''}
              />
            </>
          )}
        </div>
        <div className={css.filterButtonWrapper}>
          <Button type="submit" className={css.catalogButton}>
            Search
          </Button>
          <Button
            className={css.catalogButton}
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
