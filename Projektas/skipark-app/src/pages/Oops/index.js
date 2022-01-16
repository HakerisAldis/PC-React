import React from 'react';
import { IMAGE } from '../../constants/images';
import { imageService } from '../../services/image';

const Oops = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-no-repeat bg-cover opacity-50 absolute left-0 bottom-0 -z-50"
      style={{ backgroundImage: `url(${imageService.getUrl(IMAGE.OOPS)})` }}>
      <div className='pb-6'>
        <h1 className='text-black font-bold text-5xl text-center'>
                          OOPS!
        </h1>
        <h1 className='text-black text-center'>
                          Something went wrong!
        </h1>
      </div>
    </div>
  );
};

export default Oops;
