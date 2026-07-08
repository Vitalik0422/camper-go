import { Camper } from '@/types/camper';
import css from './CampersItem.module.css';
import Link from 'next/link';
import Image from 'next/image';
import FiltersBadges from './FiltersBadges/FiltersBadges';

interface CampersItemProps {
  camper: Camper;
}

const CampersItem = ({ camper }: CampersItemProps) => {
  const { engine, transmission, form } = camper;
  return (
    <li className={css.camperListItem}>
      <div className={css.camperPhoto}>
        <Image
          src={camper.coverImage}
          alt={`${camper.name} photo`}
          width={219}
          height={240}
        />
      </div>
      <div className={css.camperDescription}>
        <div className={css.camperTitleWrapper}>
          <h2 className={css.camperName}>{camper.name}</h2>
          <p className={css.camperPrice}>€{camper.price}</p>
        </div>
        <p className={css.camperDescriptionText}>{camper.description}</p>
        <FiltersBadges
          engine={engine}
          transmission={transmission}
          form={form}
        />
      </div>
    </li>
  );
};

export default CampersItem;
