import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { gsap } from 'gsap';

const Hero = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [videoScale, setVideoScale] = useState(1.2);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const calculateVideoScale = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const videoAspectRatio = 16 / 9;
      const screenAspectRatio = viewportWidth / viewportHeight;

      if (viewportWidth <= 640) { // For small screens (sm breakpoint in Tailwind)
        // Increased base scale for mobile devices
        setVideoScale(4.3 + (1 - screenAspectRatio));
      } else if (viewportWidth <= 768) { // For medium screens (md breakpoint)
        setVideoScale(1.8 + (1 - screenAspectRatio));
      } else if (screenAspectRatio < videoAspectRatio) {
        // For larger screens with narrow aspect ratio
        setVideoScale(1.2 + (1 - screenAspectRatio));
      } else {
        // Default scale for wide screens
        setVideoScale(1.5);
      }
    };

    calculateVideoScale();
    window.addEventListener('resize', calculateVideoScale);
    return () => window.removeEventListener('resize', calculateVideoScale);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-black flex justify-center items-center overflow-hidden"
    >
      <ReactPlayer
        ref={videoRef}
        url="https://youtu.be/cvBaj0gTQl8?si=nJVhbh2QSPytzdY5"
        playing
        loop
        muted
        width="100%"
        height="100%"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) scale(${videoScale})`,
        }}
        config={{
          youtube: {
            playerVars: { 
              controls: 0,
              showinfo: 0,
              modestbranding: 1,
              start: 42,
              rel: 0,
            }
          }
        }}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="z-10 text-center text-white px-4">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-2 sm:mb-4">
          Premiere Steels
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl">
          Delivering Quality, Strength, and Durability
        </p>
      </div>
    </div>
  );
};

export default Hero;