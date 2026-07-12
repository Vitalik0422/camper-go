'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import Button from '../UI/Button/Button';
import RadioFilterGroup from './RadioFilterGroup/RadioFilterGroup';
import css from './SideBar.module.css';
import { getFilterCamper } from '@/lib/api/camperServices';
import SearchLocationForm from './SearchLocationForm/SearchLocationForm';
import { Filters } from '@/types/filters';
import Spinner from '../Spinner/Spinner';

const FILTER_KEYS: (keyof Filters)[] = [
  'location',
  'form',
  'engine',
  'transmission',
];

const SideBar = () => {
  const { data, isError, isFetching, refetch } = useQuery({
    queryKey: ['filter'],
    queryFn: getFilterCamper,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  const router = useRouter();
  const searchParams = useSearchParams();

  const filter = Object.fromEntries(searchParams.entries()) as Filters;
  const formKey = searchParams.toString();

  const handleFilterChange = (formData: FormData) => {
    const newParams = new URLSearchParams(searchParams);

    FILTER_KEYS.forEach((key) => {
      const value = formData.get(key);
      if (value) {
        newParams.set(key, value.toString());
      } else {
        newParams.delete(key);
      }
    });
    router.push(`?${newParams.toString()}`);
  };

  const handleRefetchFilter = () => refetch();

  return (
    <aside className={css.sideBar}>
      {isFetching && <Spinner />}
      {isError && (
        <div className={css.errorWrapper}>
          <h2 className={css.filterText}>Failed to load filters</h2>
          <Button type="button" onClick={handleRefetchFilter}>
            Try again
          </Button>
        </div>
      )}
      {!isFetching && !isError && (
        <form key={formKey} action={handleFilterChange}>
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
            <Button className={css.catalogButton} primary href="/catalog">
              Clear filters
            </Button>
          </div>
        </form>
      )}
    </aside>
  );
};

export default SideBar;
