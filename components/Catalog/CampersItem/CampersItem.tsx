import { Camper } from '@/types/camper';
import css from './CampersItem.module.css';
import Image from 'next/image';
import FiltersBadges from './FiltersBadges/FiltersBadges';
import Button from '@/components/UI/Button/Button';
import Icon from '@/shared/ui/Icon/Icon';

interface CampersItemProps {
  camper: Camper;
}

const CampersItem = ({ camper }: CampersItemProps) => {
  {
  }
  const { engine, transmission, form } = camper;
  return (
    <li className={css.camperListItem}>
      <div className={css.camperPhotoWrapper}>
        <Image
          src={camper.coverImage}
          alt={`${camper.name} photo`}
          width={219}
          height={240}
          className={css.camperPhoto}
        />
      </div>
      <div className={css.camperDescription}>
        <div className={css.camperTitleWrapper}>
          <div className={css.camperNameWrapper}>
            <h2 className={css.camperName}>{camper.name}</h2>
            <p className={css.camperPrice}>€{camper.price}</p>
          </div>
          <div className={css.camperLocation}>
            <span className={css.camperRating}>
              <Icon name="star" width={16} height={16} />
              <p className={css.camperRatingText}>
                {camper.rating}({camper.totalReviews} Reviews)
              </p>
            </span>
            <p className={css.camperLocationText}>
              <Icon name="map" width={16} height={16} />
              {camper.location.split(',').reverse().join(', ')}
            </p>
          </div>
        </div>
        <p className={css.camperDescriptionText}>{camper.description}</p>
        <FiltersBadges
          engine={engine}
          transmission={transmission}
          form={form}
        />
        <Button className={css.viewMoreButton} href={`./catalog/${camper.id}`}>
          Show more
        </Button>
      </div>
    </li>
  );
};

export default CampersItem;
