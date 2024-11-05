import React, { useEffect } from 'react';
import AboutHero from '../components/AboutHero';
import MiniAbout from '../components/MiniAbout';
import AboutFounderSection from '../components/AboutFounderSection';
import { Helmet } from 'react-helmet-async';
import AboutCards from '../components/AboutCards';
import StatisticsSection from '../components/StatisticsSection ';

const About = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);

    // Save current scroll position before leaving
    return () => {
      sessionStorage.setItem('scrollPos', window.scrollY);
    };
  }, []);

  return (
    <div>
      <Helmet>
        <title>About Us | Premier Steels</title>
        <meta name="description" content="Learn about Premier Steels, our mission, values, and the team behind our success." />
      </Helmet>
      <AboutHero /> {/* this has the video */}
      <AboutCards />
      {/* <MiniAbout /> optional  */}
      <AboutFounderSection />
      <StatisticsSection />
    </div>
  );
}

export default About;
