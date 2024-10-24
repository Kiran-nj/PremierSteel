import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import steel1 from '../../src/assets/images/b1.jpg';
import steel2 from '../../src/assets/images/b2.jpg';
import steel3 from '../../src/assets/images/b3.jpg';
import steel4 from '../../src/assets/images/b4.jpg';
import steel5 from '../../src/assets/images/chain.jpg'; // Background image

const BlogCard = ({ image, title, children }) => (
  <div className="blog-item bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
    <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-6" />
    <h2 className="text-2xl font-semibold mb-4 text-gray-700">{title}</h2>
    <p className="text-gray-600">{children}</p>
  </div>
);

const Blogs = () => {
  useEffect(() => {
    gsap.fromTo(".blog-item", {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".blog-item",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  }, []);

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-24">
      {/* Background Image with Opacity and Grayscale */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${steel5})`,
          opacity: 0.2,
          /* filter: 'grayscale(100%)' */ // Apply grayscale filter to the background image
        }}
      ></div>

      {/* Overlay to darken background */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Blog Content */}
      <div className="relative z-10 text-center mb-12">
        <h1 className="hero-section-header text-gray-800">ON THE BLOG</h1>
        <p className="text-lg text-gray-500 mt-4">Website Exclusive - Steel Industry Insights</p>
      </div>

      {/* Blog Articles */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 ">
        <BlogCard image={steel1} title="Innovative Steel Technologies">
          The steel industry is at the forefront of innovation with new technologies enhancing production efficiency, sustainability, and product strength. Discover how cutting-edge advancements are shaping the future of steel.
        </BlogCard>

        <BlogCard image={steel2} title="Sustainable Steel Production">
          Learn about sustainable practices in steel production, such as reducing carbon emissions, using renewable energy, and recycling steel products, which help contribute to a greener future.
        </BlogCard>

        <BlogCard image={steel3} title="Steel in Modern Construction">
          Steel remains a key material in modern construction projects due to its strength and versatility. Explore how steel is being used in the world's most innovative and sustainable buildings.
        </BlogCard>

        <BlogCard image={steel4} title="Global Steel Market Trends">
          Stay updated on the global steel market, where fluctuating demand, environmental regulations, and technological advancements play a pivotal role in shaping the future of the industry.
        </BlogCard>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-16 text-center">
        <p className="text-gray-600 text-lg">Join our newsletter for the latest updates on the steel industry!</p>
        <p className="text-gray-800 text-xl font-semibold mt-2">www.reallygreatsteelwebsite.com</p>
      </div>
    </div>
  );
};

export default Blogs;
