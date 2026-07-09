import Badge from '@/components/Badge/Badge';
import css from './CamperFeatureBadges.module.css';
import { formatLabel } from '@/lib/utils/formatLabel';

interface CamperFeatureBadgesProps {
  features: string[];
}

const CamperFeatureBadges = ({ features }: CamperFeatureBadgesProps) => {
  return (
    <div className={css.featureBadge}>
      {features.map((feature) => (
        <Badge key={feature}>{formatLabel(feature)}</Badge>
      ))}
    </div>
  );
};

export default CamperFeatureBadges;
