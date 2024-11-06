import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { featuredProjects } from '../utils/constants';
import Loader from './Loader';

const SteelProductsShowcase = () => {
  const sectionRefs = useRef([]);
  const videoRef = useRef(null);
  const [loadingStates, setLoadingStates] = useState(
    Array(featuredProjects.length).fill(true)
  );

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (!isMobile && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }

    sectionRefs.current.forEach((section, index) => {
      const productImage = section.querySelector('.product-image');
      const productInfo = section.querySelector('.product-info');

      if (!isMobile) {
        gsap.set(productImage, { opacity: 0 });
        gsap.set(productInfo, { y: 0, opacity: 1 });

        section.addEventListener('mouseenter', () => {
          gsap.to(productImage, { opacity: 1, duration: 0.3 });
          gsap.to(productInfo, { y: 0, opacity: 1, duration: 0.3 });
        });

        section.addEventListener('mouseleave', () => {
          gsap.to(productImage, { opacity: 0, duration: 0.3 });
          gsap.to(productInfo, { y: 0, opacity: 1, duration: 0.3 });
        });
      } else {
        gsap.set(productImage, { opacity: 1 });
        gsap.set(productInfo, { y: 0, opacity: 1 });
      }
    });
  }, []);

  const handleImageLoad = (index) => {
    // Brief delay to make sure loader is visible
    setTimeout(() => {
      setLoadingStates((prevStates) => {
        const newStates = [...prevStates];
        newStates[index] = false;
        return newStates;
      });
    }, 1000); // Delay for 1 second
  };

  const isMobile = window.innerWidth < 768;

  return (
    <div className="h-auto md:h-screen flex flex-col">
      <div className='h-fit text-selWhite text-xl md:text-5xl pl-2 md:pl-0 py-5 md:py-10 uppercase font-extralight md:font-thin text-start md:text-center bg-black'>
        <h2>featured <span className='text-selRed'>Products</span></h2>
      </div>
      <div className="relative w-full flex-grow overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
          src="src/assets/vidcomp1.mp4"
          loop
          muted
          playsInline
        />

        <div className="relative w-full h-full flex flex-col md:flex-row bg-selBlack/60">
          {featuredProjects.map((product, index) => (
            <div
              key={product.id}
              ref={el => sectionRefs.current[index] = el}
              className="group w-full md:w-1/4 h-[40vh] md:h-full relative overflow-hidden cursor-pointer"
            >
              {isMobile && loadingStates[index] && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-300/70">
                  <Loader />
                </div>
              )}

              <img
                src={product.image}
                alt={product.name}
                onLoad={() => handleImageLoad(index)}
                className="product-image absolute inset-0 w-full h-full object-cover opacity-0"
                style={{ display: loadingStates[index] ? 'none' : 'block' }}
              />

              <div className="product-info w-full bg-gray/50 md:bg-transparent group-hover:bg-gray/60 px-2 absolute bottom-0 inset-x-0 flex flex-col items-start justify-start gap-1 py-2 md:py-4">
                <span className="text-white text-xl sm:text-2xl md:text-2xl lg:text-3xl font-thin drop-shadow-md">
                  {product.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SteelProductsShowcase;
