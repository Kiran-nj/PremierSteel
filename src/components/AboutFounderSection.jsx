import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { teamMembers } from '../utils/constants';

gsap.registerPlugin(ScrollTrigger);

const AboutFounderSection = () => {
  const sectionRef = useRef(null);
  const timeline = useRef(null);

  useEffect(() => {
    const textElements = gsap.utils.toArray('.animate-text');
    const imageElements = gsap.utils.toArray('.animate-image');
    
    // Create a GSAP timeline
    timeline.current = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
        toggleActions: 'play none none reverse',
        markers: false,
      }
    });

    // Add animations to the timeline
    timeline.current
      .to(textElements, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
      });

    // Cleanup function
    return () => {
      if (timeline.current) {
        timeline.current.kill();
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="founder-section bg-blue-50 py-16 px-4 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto space-y-24">
        {teamMembers.map((member, index) => (
          <div 
            key={member.name}
            className={`flex flex-col items-center justify-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12`}
          >
            <div className="animate-text w-full text-center opacity-0">
              <h3 className="font-bold text-lg text-gray-700 uppercase mb-4">{member.role}</h3>
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">{member.name}</h2>
              {member.description.map((paragraph, idx) => (
                <p key={idx} className="text-gray-700 mb-6 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>

          {/*}  <div className="animate-image w-full md:w-1/2 h-[60vh] opacity-0 scale-90">
              <img
                src={member.image} // Dynamically render the image from teamMembers array
                alt={member.name}
                className="w-full h-full rounded-lg object-cover shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>*/}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutFounderSection;
