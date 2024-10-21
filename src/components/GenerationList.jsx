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
      name: "Mr. Gopal A. Parekh",
      description: [
        "Our story is rooted in the remarkable journey of a steel stalwart, Gopal Parekh, who has dedicated over 40 years to the steel industry. Beginning from humble beginnings in a village, he moved to Mumbai and started his career with a job, which eventually led to the founding of a small trading company.",
        "With perseverance and vision, he, along with his two brothers and his son, Jatin Parekh, laid the foundation for Fortran Steel. Today, happily retired, he remains a vital part of our community, dedicating his time and energy to helping others and inspiring us to continue creating value through our work."
      ]
    },
    {
      role: "Co-Founder",
      name: "Mr. Jatin Parekh",
      description: [
        "Jatin Parekh, with a vision of taking Fortran Steel to new heights, played a pivotal role in transforming the business. His forward-thinking approach and strategic leadership have ensured continued growth and expansion across markets.",
        "With a commitment to quality and innovation, Jatin spearheaded initiatives that have made Fortran Steel a trusted name in the steel industry."
      ]
    },
    {
      role: "Chief Operations Officer",
      name: "Ms. Priya Parekh",
      description: [
        "Priya Parekh, the driving force behind the company's operations, ensures seamless coordination between teams. Her leadership in managing day-to-day operations ensures Fortran Steel's continued success in delivering quality products to its customers.",
        "With a passion for efficiency and excellence, Priya continuously strives to enhance operational workflows and customer satisfaction."
      ]
    },
    {
      role: "Chief Technology Officer",
      name: "Mr. Raj Mehta",
      description: [
        "Raj Mehta brings over 15 years of technology expertise to Fortran Steel. His innovative approach to digital transformation has revolutionized our operational efficiency and customer service capabilities.",
        "Under his leadership, we've implemented cutting-edge systems that have streamlined our processes and enhanced our ability to serve our clients better."
      ]
    },
    {
      role: "Chief Financial Officer",
      name: "Ms. Anjali Shah",
      description: [
        "Anjali Shah, with her extensive background in financial management and strategic planning, has been instrumental in strengthening Fortran Steel's financial foundation.",
        "Her expertise in financial strategy and risk management has helped secure sustainable growth and maintain strong relationships with stakeholders."
      ]
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
                                src={`/src/assets/CEO1.jpg`}
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