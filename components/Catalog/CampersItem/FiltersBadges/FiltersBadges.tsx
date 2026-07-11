import Icon from '@/shared/ui/Icon/Icon';
import css from './FiltersChipes.module.css';
import { formatLabel } from '@/lib/utils/formatLabel';
import Chip from '@/components/Chip/Chip';

interface FiltersBadgesProps {
  engine: string;
  transmission: string;
  form: string;
}

const FiltersBadges = ({ engine, transmission, form }: FiltersBadgesProps) => {
  return (
    <div className={css.filtersBadgesWrapper}>
      <Chip>
        <Icon name="gas" width={20} height={20} />
        <p className={css.filterText}>{formatLabel(engine)}</p>
      </Chip>
      <Chip>
        <Icon name="transmission" width={20} height={20} />
        <p className={css.filterText}>{formatLabel(transmission)}</p>
      </Chip>
      <Chip>
        <Icon name="car" width={20} height={20} />
        <p className={css.filterText}>{formatLabel(form)}</p>
      </Chip>
    </div>
  );
};

export default FiltersBadges;
