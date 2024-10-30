import React from 'react';
import { productsList } from '../utils/constants';

const ProjectGrid = () => {
  return (
    <>
    <div className='h-fit text-selWhite  text-xl md:text-5xl pl-2 md:pl-10 py-5 md:py-10 uppercase font-extralight md:font-thin text-start md:text-center bg-black'>
        <h2 className="">All <span className='text-selRed'>Stocks</span></h2>
      </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-1 md:px-4 pb-3 md:pb-10 bg-black">
      {productsList.map((project, index) => (
        <div
          key={index}
          className="relative group h-80 overflow-hidden shadow-lg"
          style={{ backgroundImage: `url(${project.imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-500"></div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <h3 className="text-white text-lg font-semibold leading-tight group-hover:text-xl transition-all duration-500 text-shadow-black">
              {project.title}
            </h3>
            <p className="text-white text-sm opacity-80 mt-2 group-hover:opacity-100 transition-all duration-500 text-shadow-black">
              {project.category}
            </p>

          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default ProjectGrid;
