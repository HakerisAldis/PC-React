import React from 'react';
import { useParams } from 'react-router-dom';
import GearList from '../../components/layout/GearList';
import useGetData from '../../hooks/useGetData';
import { gearService } from '../../services/gear';

const Gear = () => {
  const { collection } = useParams();
  console.log(collection);
  const allGear = async () => await gearService.getAll(collection);
  const [skis, isLoading] = useGetData(allGear);

  return (
    <GearList gearList={skis} isLoading={isLoading} />
  );
};

export default Gear;
