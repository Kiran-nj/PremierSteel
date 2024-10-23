import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FounderSection = () => {
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
      })
      .to(imageElements, {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        stagger: 0.3,
        ease: 'power2.out',
      }, '-=1'); // Start slightly before the text animation ends

    // Cleanup function
    return () => {
      if (timeline.current) {
        timeline.current.kill();
      }
    };
  }, []);

  const teamMembers = [
    {
      role: "Founder",
      name: "Mr. V A Mohamed Ashraf",
      description: [
        "Premier steels is established in 1982 by V A Mohamed Ashraf (Achu).",
        "Premier Steels started as a small business to become one of the most respected names in the Stainless Steel market.",
        "With a huge stock ranging from S.S Pipes, Sheets, Angles, and various other products all available at competitive prices, we also assure an exceptional quality of our products.",
        "We are also the authorised dealers of JNB Steels and as said above, quality is our first priority.",
        "Another product worth mentioning is the Coloured, PVD Coated Stainless Steel Sheet, which is in popular demand for its visual appeal and various other advantages.",
      ],
      image: '/src/assets/founder.jpeg' // Image path for founder
    },
    {
      role: "Co-Founder",
      name: "Mr. Zakir",
      description: [
        "Premier steels is established in 1982 by V A Mohamed Ashraf (Achu).",
        "Premier Steels started as a small business to become one of the most respected names in the Stainless Steel market.",
        "With a huge stock ranging from S.S Pipes, Sheets, Angles, and various other products all available at competitive prices, we also assure an exceptional quality of our products.",
      ],
      image: '/src/assets/founder.jpeg' // Image path for co-founder
    }
  ];

  return (
    <div ref={sectionRef} className="founder-section bg-blue-50 py-16 px-4 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto space-y-24">
        {teamMembers.map((member, index) => (
          <div 
            key={member.name}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between gap-12`}
          >
            <div className="animate-text w-full md:w-1/2 text-left opacity-0">
              <h3 className="font-bold text-lg text-gray-700 uppercase mb-4">{member.role}</h3>
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">{member.name}</h2>
              {member.description.map((paragraph, idx) => (
                <p key={idx} className="text-gray-700 mb-6 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="animate-image w-full md:w-1/2 h-[60vh] opacity-0 scale-90">
              <img
                src={member.image} // Dynamically render the image from teamMembers array
                alt={member.name}
                className="w-full h-full rounded-lg object-cover shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FounderSection;
