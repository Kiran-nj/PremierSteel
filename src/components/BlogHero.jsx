import React, { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import { gsap } from 'gsap';

const BlogHero = () => {
  const containerRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    // Fade-in animation for the container
    gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  const handleProgress = (progress) => {
    // Check if current time is greater than 60 seconds (1 minute)
    if (progress.playedSeconds >= 60) {
      playerRef.current.seekTo(10); // Seek back to 10 seconds
    }
  };

  return (
    <div ref={containerRef} className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
      {/* React Player */}
      <ReactPlayer
        ref={playerRef}
        className="absolute top-0 left-0"
        url="https://www.youtube.com/watch?v=FMnuXTN2Bvw"
        playing={true}
        muted={true}
        controls={false}
        width="100%"
        height="100%"
        style={{
          width: '100vw',
          height: '56.25vw', // Aspect ratio of 16:9
          minHeight: '100vh',
          minWidth: '177.77vh', // Aspect ratio of 16:9 for height
          objectFit: 'cover',
          transform: 'scale(1.4)', // Scale the video to remove top/bottom bars
          transformOrigin: 'center center', // Keep scaling centered
        }}
        onProgress={handleProgress}
        config={{
          youtube: {
            playerVars: {
              autoplay: 1,
              start: 10, // Start at 10 seconds
              end: 60,   // Optional: Set an end time for the player
              loop: 1,
              modestbranding: 1,
              showinfo: 0,
            },
          },
        }}
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 bg-selBlack/60 flex items-center justify-center">
      <h1 className="hero-section-header mb-2 sm:mb-4">
          Blog
        </h1>
      </div>
    </div>
  );
};

export default BlogHero;
