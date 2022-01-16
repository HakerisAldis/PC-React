import React from 'react';
import GearList from '../../components/layout/GearList';
import useGetData from '../../hooks/useGetData';
import { snowboardService } from '../../services/snowboard';

const Snowboards = () => {
  const [snowboards, isLoading] = useGetData(snowboardService.getAll);

  return (
    <GearList gearList={snowboards} isLoading={isLoading} />
  );
};

export default Snowboards;
