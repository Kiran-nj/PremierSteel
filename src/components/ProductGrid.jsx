import React, { useState } from 'react';
import { companyPhoneNo, productsList } from '../utils/constants';
import { FaWhatsapp } from 'react-icons/fa';
import Loader from './Loader'; // Assuming you have a Loader component

const ProjectGrid = () => {
  const [loadingStates, setLoadingStates] = useState(
    Array(productsList.length).fill(true)
  );

  const handleImageLoad = (index) => {
    setLoadingStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = false;
      return newStates;
    });
  };

  return (
    <>
      <div className='h-fit text-selWhite text-xl md:text-5xl pl-2 md:pl-0 py-5 md:py-10 uppercase font-extralight md:font-thin text-start md:text-center bg-black'>
        <h2>All <span className='text-selRed'>Stocks</span></h2>
        <span className="text-xs md:text-base">Our Products are available in all sizes and quantity</span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-1 md:px-4 pb-3 md:pb-10 bg-black overflow-visible">
        {productsList.map((project, index) => (
          <div
            key={index}
            className="relative group h-80 overflow-hidden shadow-lg"
            style={{
              backgroundImage: `url(${project.imageSrc})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Loader for images that are still loading     */}
            {loadingStates[index] && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                <Loader /> {/* Display loader component while the image is loading */}
              </div>
            )}

            <img
              src={project.imageSrc}
              alt={project.title}
              onLoad={() => handleImageLoad(index)}
              className="absolute inset-0 w-full h-full object-cover opacity-0"
              style={{ display: loadingStates[index] ? 'none' : 'block' }}
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

            {/* Text Content with Semi-Transparent Background */}
            <div className="absolute inset-x-0 bottom-0 bg-black/60 px-3 pt-3 flex flex-col justify-end gap-1">
              <h3 className="text-white text-lg font-semibold leading-tight md:group-hover:text-xl transition-all duration-500 text-shadow-black border border-borderColor w-fit px-3">
                {project.title}
              </h3>
              <p className='text-white text-xs md:text-xs'>
                Available in All Sizes and Quantity
              </p>
            </div>

            {/* WhatsApp icon */}
            <a
              href={`https://wa.me/+91${companyPhoneNo}?text=I'm%20interested%20in%20the%20product:%20${encodeURIComponent(project.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-0 right-4 z-10 p-2 bg-green-500 text-green rounded-full opacity-80 hover:opacity-100 transition-opacity duration-300 animate-pulse"
            >
              <FaWhatsapp className='text-4xl' />
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectGrid;
