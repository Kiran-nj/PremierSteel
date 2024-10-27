import React from 'react';
import { partners } from '../utils/constants';

const StrategicPartners = () => {
  return (
    <div className="bg-white py-5 md:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-around md:justify-between">
        <div className='flex flex-col justify-center items-center'>
          <h2 className="text-sm md:text-3xl font-medium md:font-light text-selBlack text-center uppercase">
            Trusted Steel Partners
          </h2>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-5 md:gap-10">
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
                className="partner-images h-12 sm:h-12 md:h-16 lg:h-16"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StrategicPartners;
