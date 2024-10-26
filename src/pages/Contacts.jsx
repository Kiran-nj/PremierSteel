import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroContactsSection from '../components/HeroContactsSection';
import { Helmet } from 'react-helmet-async';
import ContactsContentSection from '../components/ContactsContentSection';

gsap.registerPlugin(ScrollTrigger);

const Contacts = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    // window.scrollTo(0, 0);
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-zinc text-white">
      <Helmet>
        <title>Contact Us | Premier Steels</title>
        <meta name="description" content="Get in touch with Premier Steels. Contact us via phone or email for any inquiries." />
        <meta name="keywords" content="contact, Premier Steels, inquiries, customer support, steel supplier" />
      </Helmet>

      <HeroContactsSection /> {/* Video section */}
      <ContactsContentSection />

    </div>
  );
};


export default Contacts;
