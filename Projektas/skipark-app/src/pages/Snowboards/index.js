import React from 'react';
import ListCard from '../../components/dataDisplay/ListCard';
import useGetData from '../../hooks/useGetData';
import { snowboardService } from '../../services/snowboard';

const Snowboards = () => {
  const [gearList, isLoading] = useGetData(snowboardService.getAll);

  if (isLoading) {
    return <div className="flex items-center justify-center space-x-2 animate-pulse my-4">
      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
    </div>;
  }

  return (
    <div className='grid grid-cols-4'>
      {gearList.map(snowboard => <div key={snowboard.id}>
        <ListCard {...snowboard} />
      </div>)}
    </div>
  );
};

export default Snowboards;
