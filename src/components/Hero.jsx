import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Fade-in animation for the container and text
    gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden">
      {/* YouTube Video */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <iframe
          className="absolute top-0 left-0"
          src="https://www.youtube.com/embed/cvBaj0gTQl8?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&loop=1&playlist=cvBaj0gTQl8"
          title="YouTube video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{
            width: '100vw',
            height: '56.25vw', // Aspect ratio of 16:9
            minHeight: '100vh',
            minWidth: '177.77vh', // Aspect ratio of 16:9 for height
            objectFit: 'cover',
            transform: 'scale(1.5)', // Scale the video to remove top/bottom bars
            transformOrigin: 'center center', // Keep scaling centered
          }}
        ></iframe>
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="company-font-only text-5xl sm:text-6xl md:text-[5.2rem] font-bold">
            Premier Steels
          </h1>
          <p className="text-borderColor2 sm:text-lg md:text-2xl">
            Quality • Strength • Durability
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
