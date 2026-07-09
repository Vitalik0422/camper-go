import React from 'react';
import CampersList from './CampersList/CampersList';
import { ResponseCampers } from '@/lib/api/types';

interface CatalogProps {
  data: ResponseCampers;
}

const Catalog = ({ data }: CatalogProps) => {
  return <CampersList campers={data.campers} />;
};

export default Catalog;
