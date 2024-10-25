import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroContactsSection from '../components/HeroContactsSection';
import { companyEmail, companyPhoneNo } from '../utils/constants';
import { Helmet } from 'react-helmet-async';

gsap.registerPlugin(ScrollTrigger);

const Contacts = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);

    // GSAP animation for each paragraph in the contact details
    const paragraphs = contentRef.current.querySelectorAll("p");

    paragraphs.forEach((p, index) => {
      gsap.fromTo(
        p,
        { y: 50, opacity: 0 }, // Start position (below)
        {
          y: 0,
          opacity: 1, // End position (visible at original position)
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: p,
            start: "top bottom+=100", // Trigger slightly before the element enters
            end: "top top", // Trigger the reverse when the element hits the top
            toggleActions: "play none none reverse", // Automatic play/reverse
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-selBlack text-white">
      <Helmet>
        <title>Contact Us | Premier Steels</title>
        <meta name="description" content="Get in touch with Premier Steels. Contact us via phone or email for any inquiries." />
        <meta name="keywords" content="contact, Premier Steels, inquiries, customer support, steel supplier" />
      </Helmet>

      <HeroContactsSection /> {/* this has the video */}

      {/* content */}
      <div className="h-auto md:h-screen relative flex flex-col justify-center">
        <div ref={contentRef} className="bg-selRed flex justify-center items-center h-full w-full md:w-[60vw] p-6">
          <div className="h-fit w-full">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Our Locations</h2>

            <div className="text-base md:text-lg mb-6">
              <p className="font-semibold">Registered Office:</p>
              <p className="ml-4">Kochi</p>

              <p className="font-semibold mt-2">Works:</p>
              <p className="ml-4">All Over India</p>
            </div>

            <h2 className="text-xl md:text-2xl font-bold mb-4">Contact Information</h2>

            <div className="text-base md:text-lg">
              <p className="font-semibold">Premier Steels | Head Office Contact Information</p>
              <p className="ml-4">Registered Office</p>
              <p className="ml-4">Premier Steels</p>

              <p className="ml-4 mt-2">
                Stock Yard, Pullepady Road,<br />
                Ernakulam, PIN: 628017<br />
                Kerala, India
              </p>

              <p className="ml-4 mt-2">
                Phone: +91 {companyPhoneNo}<br />
                Email: {companyEmail}
              </p>
            </div>
          </div>
        </div>

        <div className="h-96 md:h-3/4 w-full md:w-[60vw] md:absolute md:top-1/2 md:right-0 transform md:-translate-y-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.4082834858555!2d76.28874327503091!3d9.983093090121452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d48f57a27df%3A0xbd8601238c88e7ce!2sPremier%20Steels!5e0!3m2!1sen!2sin!4v1729509089342!5m2!1sen!2sin"
            width="100%"
            className="h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Google Map Location" // Accessibility title
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
