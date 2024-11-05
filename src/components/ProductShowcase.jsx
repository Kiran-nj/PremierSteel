import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const products = [
    { 
      id: 1, 
      name: 'MS Joints', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="8" />
        </svg>
      ),
      description: 'High-quality MS joints for structural applications' 
    },
    { 
      id: 2, 
      name: 'MS Channels', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 6h16v12H4z M8 6v12" />
        </svg>
      ),
      description: 'Durable MS channels for construction needs' 
    },
    { 
      id: 3, 
      name: 'MS Plates', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="4" width="16" height="16" rx="2" />
        </svg>
      ),
      description: 'Premium grade MS plates for industrial use' 
    },
    { 
      id: 4, 
      name: 'MS Angles', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4v16h16" />
        </svg>
      ),
      description: 'Precision-engineered MS angles for diverse applications' 
    },
    { 
      id: 5, 
      name: 'MS Flats', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 12h16" />
        </svg>
      ),
      description: 'Versatile MS flats for multiple uses' 
    },
    { 
      id: 6, 
      name: 'MS Rounds', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
      description: 'High-strength MS rounds for various needs' 
    },
    { 
      id: 7, 
      name: 'MS Squares', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="6" y="6" width="12" height="12" />
        </svg>
      ),
      description: 'Quality MS squares for construction projects' 
    },
    { 
      id: 8, 
      name: 'GI Sheets', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16v16H4z M4 8h16 M8 4v16" />
        </svg>
      ),
      description: 'Durable GI sheets for roofing solutions' 
    },
    { 
      id: 9, 
      name: 'GP/MS Tubes,Pipes,Squares,Rounds', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 6h16v12H4z" />
          <path d="M8 6v12 M16 6v12" />
        </svg>
      ),
      description: 'Reliable tubes and pipes for various applications' 
    }
  ];

  useEffect(() => {
    const cards = cardsRef.current;

    // Initial setup for cards
    gsap.set(cards, { 
      opacity: 0, 
      y: 50 
    });

    // Create scroll-triggered animations
    cards.forEach((card, index) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: index * 0.15,
      });

      // Create hover animations
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out',
          backgroundColor: '#f0f9ff'
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
          backgroundColor: '#ffffff'
        });
      });
    });

    return () => {
      cards.forEach(card => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      });
    };
  }, []);

  const handleLearnMore = (product) => {
    // Add modal functionality here
    alert(`Learn more about ${product.name}`);
  };

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Products
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              ref={el => cardsRef.current[index] = el}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center transition-all duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-4">
                <div className="text-blue-600">
                  {product.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                {product.name}
              </h3>
              
              <p className="text-gray-600 text-center mb-6">
                {product.description}
              </p>
              
              <button
                onClick={() => handleLearnMore(product)}
                className="mt-auto bg-blue-600 text-white py-2 px-6 rounded-lg 
                         hover:bg-blue-700 transform transition-all duration-300
                         active:scale-95 focus:outline-none focus:ring-2 
                         focus:ring-blue-500 focus:ring-offset-2"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;