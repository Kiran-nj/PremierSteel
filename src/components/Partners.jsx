import React from 'react';
import { partners } from '../utils/constants';

const StrategicPartners = () => {
  return (
    <div className="py-5 bg-white pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='flex justify-center'>
        <h2 className="[text-shadow:_0_1px_5px_rgb(0_0_0_/_40%)] text-xl md:text-3xl font-extrabold text-black text-center mb-4 md:mb-4">
          STRATEGIC PARTNERSHIPS
        </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {partners.map((partner) => (
            <div key={partner.name} className="flex justify-center border border-zinc p-5">
              {/* <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 sm:h-20 md:h-24 lg:h-28"
              /> */}
              <img
                src={partner.logo}
                alt={partner.name}
                className="partner-images h-16 sm:h-20 md:h-24 lg:h-28"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StrategicPartners;
