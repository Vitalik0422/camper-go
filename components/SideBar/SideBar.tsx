'use client';
import { useQuery } from '@tanstack/react-query';
import Button from '../UI/Button/Button';
import RadioFilterGroup from './RadioFilterGroup/RadioFilterGroup';
import css from './SideBar.module.css';
import { getFilterCamper } from '@/lib/api/camperServices';
import SearchLocationForm from './SearchLocationForm/SearchLocationForm';

const SideBar = () => {
  const { data } = useQuery({
    queryKey: ['filter'],
    queryFn: getFilterCamper,
  });

  return (
    <aside className={css.sideBar}>
      <form>
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
          <Button width={312} height={56}>
            Search
          </Button>
          <Button width={312} height={56} primary={true}>
            Clear filters
          </Button>
        </div>
      </form>
    </aside>
  );
};

export default SideBar;
