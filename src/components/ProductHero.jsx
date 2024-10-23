import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { gsap } from 'gsap';

const ProductHero = () => {
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
        setVideoScale(1.8);
      }
    };

    calculateVideoScale();
    window.addEventListener('resize', calculateVideoScale);
    return () => window.removeEventListener('resize', calculateVideoScale);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[70vh] bg-black flex justify-center items-center overflow-hidden"
    >
      <ReactPlayer
        ref={videoRef}
        url="https://youtu.be/4BzjUq921Y4?si=rZb4cCKuCs6JGzSN"
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
              start: 18,
              stop: 40,
              rel: 0,
            }
          }
        }}
        className="object-cover"
      />
      <div className="absolute inset-0  bg-black bg-opacity-30"></div>
      <div className="absolute bottom-8 left-0 right-0 text-center text-white px-4 z-10">
        <h1 className="hero-section-header mb-2 sm:mb-4">
          Our Products
        </h1>
      </div>

    </div>
  );
};

export default ProductHero;