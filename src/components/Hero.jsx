import React, { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
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
      {/* ReactPlayer for YouTube Video */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=cvBaj0gTQl8"
          className="homepage-video-iframe absolute top-0 left-0 w-full h-full"
          playing
          muted
          controls={false}
          loop
          start={42}         
          end={78}           
          config={{
            youtube: {
              playerVars: {
                modestbranding: 1,
                showinfo: 0,
                rel: 0,
                start: 42,     // Start at 41 seconds
                end: 78,       // End at 78 seconds
              },
            },
          }}
        />
      </div>

      {/* Text Overlay */}
      <div className="bg-selBlack/40 absolute inset-0 flex items-center justify-center">
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
