import { getCamper } from '@/lib/api/camperServices';
import React from 'react';
interface CamperDetails {
  params: Promise<{ id: string }>;
}

const Camper = async ({ params }: CamperDetails) => {
  const { id } = await params;
  const camper = await getCamper(id);

  return <></>;
};

export default Camper;
