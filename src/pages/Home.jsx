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
    <div className='bg-selBlack'>
      <Helmet>
        <title>Premier Steels</title>
        <meta name="description" content="Explore Premier Steels' quality products, strategic partnerships, and commitment to excellence in steel manufacturing." />
        <meta name="keywords" content="steel products, MS Joints, MS Channels, Premier Steels, steel manufacturing" />
      </Helmet>
      <Hero />
      <SteelProductsShowcase />
      <MiniAbout />
      <StrategicPartners />
    </div>
  );
}

export default Home;
