import React, { useEffect } from 'react';
import SteelProductsShowcase from '../components/Products';
import Hero from '../components/Hero';
import MiniAbout from './../components/MiniAbout';
import StrategicPartners from '../components/Partners';
import { Helmet } from 'react-helmet-async';

function Home() {
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
        <title>Premier Steels</title>
        <meta name="description" content="Explore Premier Steels' quality products, strategic partnerships, and commitment to excellence in steel manufacturing." />
        <meta name="keywords" content="steel products, MS Joints, MS Channels, Premier Steels, steel manufacturing" />
      </Helmet>
      <Hero />
      <SteelProductsShowcase />
      <MiniAbout />
      <StrategicPartners />
            {/* Hidden keywords section */}
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
    </div>
  );
}

export default Home;
