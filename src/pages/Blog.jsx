import React, { useEffect } from 'react'
import Blogs from './../components/BlogPage';
import BlogHero from '../components/BlogHero';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);

    // Save current scroll position before leaving
    return () => {
      sessionStorage.setItem('scrollPos', window.scrollY);
    };
  }, []);
  return (
    <div className=''>
      <Helmet>
        <title>Blog | Premier Steels</title>
        <meta
          name="description"
          content="Learn more about steel properties, production methods, grades, and applications in our Factfile Blog."
        />
        <meta
          name="keywords"
          content="steel production, steel distribution, mild steel, stainless steel, steel properties, steel grades"
        />
      </Helmet>
      <BlogHero /> {/* this has the video */}
      <Blogs />
      {/*SEO segment keywords*/}
      <div className="hidden lg:block absolute -z-10 top-0 opacity-0 pointer-events-none">
        <p>
          Steel, TMT, Steel distributor, Steel wholesale, Channels, Beam, Joists, Angle, Plates, Sail,
          Steel Suppliers, Steel Dealers, Steel Wholesalers, Steel Sheets, Stainless Steel Pipes, Mild
          Steel, Structural Steel, Steel Tubes, Industrial Steel Products, Steel Fabrication, Steel
          Sections, Metal Suppliers, Steel Construction Materials, Galvanized Steel, Reinforcement
          Steel, Heavy Steel Beams, Steel Bars, Steel Manufacturing, Vizag Steel Suppliers, Kerala
          Steel Suppliers, SAIL Steel Dealers, Steel Products for Construction, Durable Steel Materials,
          Stainless Steel Plates, Bulk Steel Supply, Custom Steel Solutions, Quality Steel Products,
          Affordable Steel Wholesaler, Trusted Steel Suppliers, Steel Distributor Near Me, Premium
          Quality Steel, India
        </p>
      </div>
      <div className="absolute left-[-9999px] top-auto w-px h-px overflow-hidden">
        <h1 className="hidden">Steel</h1>
        <h2 className="hidden">TMT</h2>
        <h2 className="hidden">Steel distributor</h2>
        <h2 className="hidden">Steel wholesale</h2>
        <h2 className="hidden">Channels</h2>
        <h2 className="hidden">Beam</h2>
        <h2 className="hidden">Joists</h2>
        <h2 className="hidden">Angle</h2>
        <h2 className="hidden">Plates</h2>
        <h2 className="hidden">SAIL</h2>
        <h2 className="hidden">Steel Suppliers</h2>
        <h2 className="hidden">Steel Dealers</h2>
        <h2 className="hidden">Steel Wholesalers</h2>
        <h2 className="hidden">Steel Sheets</h2>
        <h2 className="hidden">Stainless Steel Pipes</h2>
        <h2 className="hidden">Mild Steel</h2>
        <h2 className="hidden">Structural Steel</h2>
        <h2 className="hidden">Steel Tubes</h2>
        <h2 className="hidden">Industrial Steel Products</h2>
        <h2 className="hidden">Steel Fabrication</h2>
        <h2 className="hidden">Steel Sections</h2>
        <h2 className="hidden">Metal Suppliers</h2>
        <h2 className="hidden">Steel Construction Materials</h2>
        <h2 className="hidden">Galvanized Steel</h2>
        <h2 className="hidden">Reinforcement Steel</h2>
        <h2 className="hidden">Heavy Steel Beams</h2>
        <h2 className="hidden">Steel Bars</h2>
        <h2 className="hidden">Steel Manufacturing</h2>
        <h2 className="hidden">Kerala Steel Suppliers</h2>
        <h2 className="hidden">SAIL Steel Dealers</h2>
        <h2 className="hidden">Steel Products for Construction</h2>
        <h2 className="hidden">Durable Steel Materials</h2>
        <h2 className="hidden">Stainless Steel Plates</h2>
        <h2 className="hidden">Bulk Steel Supply</h2>
        <h2 className="hidden">Custom Steel Solutions</h2>
        <h2 className="hidden">Quality Steel Products</h2>
        <h2 className="hidden">Affordable Steel Wholesaler</h2>
        <h2 className="hidden">Trusted Steel Suppliers</h2>
        <h2 className="hidden">Steel Distributor Near Me</h2>
        <h2 className="hidden">Premium Quality Steel</h2>
        <h2 className="hidden">Indian Steel Supplier</h2>
      </div>
    </div>
  )
}

export default Blog