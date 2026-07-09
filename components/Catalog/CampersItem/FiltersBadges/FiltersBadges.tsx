import Icon from '@/shared/ui/Icon/Icon';
import css from './FiltersBadges.module.css';
import { formatLabel } from '@/lib/utils/formatLabel';

interface FiltersBadgesProps {
  engine: string;
  transmission: string;
  form: string;
}

const FiltersBadges = ({ engine, transmission, form }: FiltersBadgesProps) => {
  return (
    <div className={css.filtersBadgesWrapper}>
      <span className={css.filterBadge}>
        <Icon name="gas" width={20} height={20} />
        <p className={css.filterText}>{formatLabel(engine)}</p>
      </span>
      <span className={css.filterBadge}>
        <Icon name="transmission" width={20} height={20} />
        <p className={css.filterText}>{formatLabel(transmission)}</p>
      </span>
      <span className={css.filterBadge}>
        <Icon name="car" width={20} height={20} />
        <p className={css.filterText}>{formatLabel(form)}</p>
      </span>
    </div>
  );
};

export default FiltersBadges;
