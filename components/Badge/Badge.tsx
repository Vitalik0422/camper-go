import Icon from '@/shared/ui/Icon/Icon';
import css from './Badge.module.css';

interface BadgesProps {
  children: React.ReactNode;
}

const FiltersBadges = ({ children }: BadgesProps) => {
  return <span className={css.badge}>{children}</span>;
};

export default FiltersBadges;
