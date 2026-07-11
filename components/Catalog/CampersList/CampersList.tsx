import css from './CampersList.module.css';

import CampersItem from '../CampersItem/CamperItem';
import { Camper } from '@/types/camper';

interface CampersListProps {
  campers: Camper[];
}

const CampersList = ({ campers }: CampersListProps) => {
  return (
    <ul className={css.camperList}>
      {campers.map((camper) => (
        <CampersItem key={camper.id} camper={camper} />
      ))}
    </ul>
  );
};

export default CampersList;
