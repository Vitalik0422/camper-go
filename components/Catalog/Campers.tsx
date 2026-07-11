import React from 'react';
import CampersList from './CampersList/CampersList';
import { Camper } from '@/types/camper';

interface CatalogProps {
  data: Camper[];
}

const Catalog = ({ data }: CatalogProps) => {
  return <CampersList campers={data} />;
};

export default Catalog;
