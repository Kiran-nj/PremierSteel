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
        gsap.from(el, {
          opacity: 1,
          y: 20,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }
    });
  }, []);

  const statsData = [
    { icon: <FaBuilding size={30} />, label: 'COMPANY FOUNDED', value: '2022' },
    { icon: <FaUsers size={30} />, label: 'EMPLOYEES', value: '10+' },
    { icon: <FaSmile size={30} />, label: 'HAPPY CUSTOMERS', value: '1K+' },
    { icon: <FaThumbsUp size={30} />, label: 'SATISFACTION RATE', value: '99.99%' },
  ];

  return (
    <div className="bg-selRed text-white py-10">
      <div className="max-w-5xl mx-auto flex justify-between">
        {statsData.map((stat, index) => (
          <div
            key={index}
            ref={(el) => (statsRef.current[index] = el)}
            className="flex flex-col items-center"
          >
            <div className="mb-2">{stat.icon}</div>
            <p className="text-sm">{stat.label}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticsSection;
