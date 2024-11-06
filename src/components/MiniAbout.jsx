import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { yearsCompleted } from '../utils/constants';
import steel5 from '../../src/assets/images/footer_bg.jpeg'; // Background image

gsap.registerPlugin(ScrollTrigger);

const MiniAbout = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Animating the text section
    gsap.fromTo(
      textRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
        },
      }
    );

    // Animating the image section
    gsap.fromTo(
      imageRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <div
  className="relative overflow-hidden text-black"
>
  <div className="bg-white bg-opacity-90 flex flex-col md:flex-row items-center md:p-10 relative z-10">
    <div ref={imageRef} className="w-full md:w-1/2 h-[30vh] sm:h-[30vh] md:h-[38vh] flex justify-center items-center">
      <img
        src={yearsCompleted}
        alt="Premier Steel Overview"
        className="rounded-lg object-contain w-full md:w-[50%] h-full md:h-[90%]"
      />
    </div>
    
    <div ref={textRef} className="md:w-1/2 pl-3 md:pl-0 pb-5 md:pb-0 -mt-10 md:-mt-0 flex flex-col justify-center">
      <h1 className="text-2xl md:text-4xl font-thin text-black mb-6 text-center md:text-start">
        WELCOME TO <span className='company-font-only text-5xl md:text-5xl text-selRed block md:inline'>Premier Steels</span>
      </h1>
      <p className="mb-4 uppercase md:text-start">
        Your trusted partner in steel supply for over <strong className='font-extrabold text-selRed'>42 years</strong>.
      </p>
      <p className="uppercase md:text-start text-xs md:text-base">
        With a solid reputation built on quality and reliability, we offer a comprehensive range of steel products sourced from various industry leaders. Our commitment to excellence drives us to deliver not just materials, but also innovative solutions tailored to meet the diverse needs of our clients across various sectors. At Premier Steels, we pride ourselves on our exceptional customer service, technical expertise, and timely delivery, ensuring your projects run smoothly from start to finish. Join us in building a stronger future with <strong className='font-semibold'>Premier Steels</strong>.
      </p>
    </div>
  </div>
</div>

  );
};

export default MiniAbout;
