import { Camper } from '@/types/camper';
import css from './CamperDetails.module.css';
import Icon from '@/shared/ui/Icon/Icon';
import CamperFeatureBadges from './CamperFeatureBadges/CamperFeatureBadges';
import { formatLabel } from '@/lib/utils/formatLabel';

interface CamperDetailsProps {
  camper: Camper;
}

const CamperDetails = ({ camper }: CamperDetailsProps) => {
  return (
    <div className={css.camperDetails}>
      <div className={css.camperInfo}>
        <div className={css.camperNameWrapper}>
          <h2 className={css.camperTitle}>{camper.name}</h2>
          <div className={css.camperNameThumb}>
            <div className={css.camperLocation}>
              <span className={css.camperRating}>
                <Icon name="star" width={16} height={16} />
                <p className={css.camperRatingText}>
                  {camper.rating}({camper.totalReviews} Reviews)
                </p>
              </span>
              <p className={css.camperLocationText}>
                <Icon name={'map'} width={16} height={16} /> {camper.location}
              </p>
            </div>
            <p className={css.camperPrice}>€{camper.price}</p>
          </div>
        </div>
        <p className={css.camperDetailsText}>{camper.description}</p>
      </div>
      <div className={css.camperSpecs}>
        <div className={css.camperSpecHeader}>
          <h2 className={css.camperTitle}>Vehicle details</h2>
          <CamperFeatureBadges features={camper.amenities} />
        </div>
        <ul className={css.camperSpecDetailsList}>
          <li className={css.camperSpecDetailsItem}>
            <p className={css.camperSpecText}>Form</p>
            <p className={css.camperSpecText}>{formatLabel(camper.form)}</p>
          </li>
          <li className={css.camperSpecDetailsItem}>
            <p className={css.camperSpecText}>Length</p>
            <p className={css.camperSpecText}>{camper.length}</p>
          </li>
          <li className={css.camperSpecDetailsItem}>
            <p className={css.camperSpecText}>Width</p>
            <p className={css.camperSpecText}>{camper.width}</p>
          </li>
          <li className={css.camperSpecDetailsItem}>
            <p className={css.camperSpecText}>Height</p>
            <p className={css.camperSpecText}>{camper.height}</p>
          </li>
          <li className={css.camperSpecDetailsItem}>
            <p className={css.camperSpecText}>Tank</p>
            <p className={css.camperSpecText}>{camper.tank}</p>
          </li>
          <li className={css.camperSpecDetailsItem}>
            <p className={css.camperSpecText}>Consumption</p>
            <p className={css.camperSpecText}>{camper.consumption}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CamperDetails;
