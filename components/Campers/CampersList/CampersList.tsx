import React from 'react';

import CampersItem from '../CampersItem/CampersItem';
import { Camper } from '@/types/camper';

interface CampersListProps {
  campers: Camper[];
}

const CampersList = ({ campers }: CampersListProps) => {
  console.log(campers);
  return (
    <ul>
      {campers.map((camper) => (
        <CampersItem key={camper.id} camper={camper} />
      ))}
    </ul>
  );
};

export default CampersList;
