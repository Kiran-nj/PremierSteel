import React from 'react';
import { partners } from '../utils/constants';

const StrategicPartners = () => {
  return (
    <div className="bg-white pb-2 py-0 md:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-around md:justify-between gap-2 pb-1 md:pb-0">
        <div className='flex flex-col justify-center items-center pt-3'>
          <h2 className="text-xs md:text-3xl font-medium md:font-light text-red-950 text-center uppercase">
            Our Trusted Steel Partners
          </h2>
        </div>
        <div className="grid grid-cols-6 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 gap-5 md:gap-10">
          {partners.map((partner) => (
            <div key={partner.name} className="flex justify-center w-fit bg-white">
              {/* <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 sm:h-20 md:h-24 lg:h-28"
              /> */}
              <img
                src={partner.logo}
                alt={partner.name}
                className="partner-images h-8 sm:h-8 md:h-16 lg:h-16"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StrategicPartners;
