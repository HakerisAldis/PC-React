import React from 'react';
import GearList from '../../components/layout/GearList';
import useGetData from '../../hooks/useGetData';
import { helmetService } from '../../services/helmet';

const Helmets = () => {
  const [helmets, isLoading] = useGetData(helmetService.getAll);

  return (
    <GearList gearList={helmets} isLoading={isLoading} />
  );
};

export default Helmets;
