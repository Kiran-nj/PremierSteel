import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const products = [
  { id: '01', name: 'Sponge Iron',image: 'src/assets/steel1.png', description: 'Sponge iron is the key raw material required to manufacture high quality steel. It is quite versatile and can be used in both induction as well as electric arc furnaces.' },
  { id: '02', name: 'Product 2', image: 'src/assets/steel2.png', description: 'Sponge iron is the key raw material required to manufacture high quality steel. It is quite versatile and can be used in both induction as well as electric arc furnaces.' },
  { id: '03', name: 'Product 3', image: 'src/assets/pexels.jpg', description: 'Sponge iron is the key raw material required to manufacture high quality steel. It is quite versatile and can be used in both induction as well as electric arc furnaces.' },
  { id: '04', name: 'Product 4', image: 'src/assets/steel4.png', description: 'Sponge iron is the key raw material required to manufacture high quality steel. It is quite versatile and can be used in both induction as well as electric arc furnaces.' },
];

const SteelProductsShowcase = () => {
  const sectionRefs = useRef([]);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }
    
    sectionRefs.current.forEach((section, index) => {
      gsap.set(section.querySelector('.product-image'), { opacity: 0 });
      gsap.set(section.querySelector('.product-info'), { y: 0, opacity: 1 });

      section.addEventListener('mouseenter', () => {
        gsap.to(section.querySelector('.product-image'), { opacity: 1, duration: 0.3 });
        gsap.to(section.querySelector('.product-info'), { y: 0, opacity: 1, duration: 0.3 });
      });

      section.addEventListener('mouseleave', () => {
        gsap.to(section.querySelector('.product-image'), { opacity: 0, duration: 0.3 });
        gsap.to(section.querySelector('.product-info'), { y: 0, opacity: 1, duration: 0.3 });
      });
    });
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden mt-5">
      {/* Video background */}
      <video 
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="src/assets/vidcomp1.mp4"
        loop
        muted
        playsInline
      />

      {/* Product sections */}
      <div className="relative w-full h-full flex flex-col md:flex-row">
        {products.map((product, index) => (
          <div
            key={product.id}
            ref={el => sectionRefs.current[index] = el}
            className="w-full md:w-1/4 h-1/2 md:h-full relative overflow-hidden cursor-pointer"
          >
            {/* Product image overlay */}
            <div 
              className="product-image absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${product.image})` }}
            />

            {/* Product info */}
            <div className="product-info absolute bottom-0 left-0 p-4 text-white shadow-text-black text-center md:text-left">
              <h2 className="text-2xl md:text-4xl font-bold mb-2">{product.id}</h2>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">{product.name}</h3>
              <p className="text-xs md:text-sm">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SteelProductsShowcase;
