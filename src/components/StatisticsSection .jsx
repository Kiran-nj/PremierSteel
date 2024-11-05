import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaBuilding, FaUsers, FaSmile, FaThumbsUp } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const StatisticsSection = () => {
  const statsRef = useRef([]);

  useEffect(() => {
    statsRef.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          // Starting values
          { opacity: 0, y: 20 },
          // Ending values
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });
  }, []);
  

  const statsData = [
    { icon: <FaBuilding size={30} />, label: 'COMPANY FOUNDED', value: '1982' },
    { icon: <FaUsers size={30} />, label: 'STOCKS AVAILABLE', value: '10+' },
    { icon: <FaSmile size={30} />, label: 'HAPPY CUSTOMERS', value: '10K+' },
    // { icon: <FaThumbsUp size={30} />, label: 'SATISFACTION RATE', value: '99.99%' },
  ];

  return (
    <div className="timeline md:p-8 bg-selWhite">
      <div className="text-selRed py-10 px-5 md:px-20">
        <div className="content-text max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 text-center">
          {statsData.map((stat, index) => (
            <div
              key={index}
              ref={(el) => (statsRef.current[index] = el)}
              className="flex flex-col items-center "
            >
              <div className='flex flex-col justify-center border rounded-full md:rounded-xl px-5 py-5 md:px-10 md:py-10 items-center space-y-2'>
                
              <div className="text-4xl ">{stat.icon}</div>
              <h3 className="text-xs md:text-sm lg:text-base font-extralight">
                {stat.label}
              </h3>
              <p className="text-2xl  font-medium font-josefin">
                {stat.value}
              </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
