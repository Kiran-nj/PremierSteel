import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
    <div className="bg-selBlack py-16 px-6 md:px-20 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Text Section */}
        <div ref={textRef} className="md:w-1/2">
          <h1 className="text-2xl md:text-5xl font-bold text-borderColor2 mb-6">
            The essence of <span className='company-font-only text-5xl md:text-5xl text-red block md:inline'>Premier Steels</span>
          </h1>
          <p className="text-borderColor2 mb-4">
            At Premier Steels, we believe in delivering brilliance in all that we offer.
          </p>
          <p className="text-borderColor2">
            We don't just supply steel; we build solid partnerships and contribute to responsibly constructing the world’s infrastructure.
            Join us in our journey to not only meet the global demand for steel but to shape a more sustainable and resilient future.
          </p>
        </div>
        {/* Image Section */}
        <div ref={imageRef} className="md:w-1/2 h-[60vh]">
          <img
            src="src/assets/abtimg2.jpg"
            alt="Premier Steel Overview" // Updated alt text
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default MiniAbout;
