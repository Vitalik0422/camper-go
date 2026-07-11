import Chip from '@/components/Chip/Chip';
import css from './CamperFeatureChip.module.css';
import { formatLabel } from '@/lib/utils/formatLabel';

interface CamperFeatureChipProps {
  features: string[];
}

const CamperFeatureChip = ({ features }: CamperFeatureChipProps) => {
  return (
    <div className={css.featureChip}>
      {features.map((feature) => (
        <Chip key={feature}>{formatLabel(feature)}</Chip>
      ))}
    </div>
  );
};

export default CamperFeatureChip;
