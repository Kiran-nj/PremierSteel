import React, { useEffect } from 'react';
import HeroContactsSection from '../components/HeroContactsSection';
import { companyEmail, companyPhoneNo } from '../utils/constants';
import { Helmet } from 'react-helmet-async';

const Contacts = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);

    // Save current scroll position before leaving
    return () => {
      sessionStorage.setItem('scrollPos', window.scrollY);
    };
  }, []);
  return (
    <div className='bg-selBlack text-white'>
      <Helmet>
        <title>Contact Us | Premier Steels</title>
        <meta name="description" content="Get in touch with Premier Steels. Contact us via phone or email for any inquiries." />
        <meta name="keywords" content="contact, Premier Steels, inquiries, customer support, steel supplier" />
      </Helmet>

      <HeroContactsSection /> {/* this has the video */}
      <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg m-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-start mb-4">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Section: Get In Touch */}
          <div className="flex flex-col justify-center">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <p className="mt-2">Phone: <a href={`tel:${companyPhoneNo}`} className="text-blue-600 hover:underline">+{companyPhoneNo}</a></p>
            <p>Email: <a href={`mailto:${companyEmail}`} className="text-blue-600 hover:underline">{companyEmail}</a></p>

            <h4 className="text-lg font-semibold mt-4">Find Us At</h4>
            <p className="mt-2">
              Premier Steels, Pullepady ROB,<br />
              Thammanam-Pullepady Road,<br />
              Ernakulam, 628018
            </p>
          </div>

          {/* Right Section: Contact Form */}
          <div>
            <form>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel" // Use 'tel' type for phone number
                    id="phone"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                    placeholder="Your Phone Number"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    required
                    rows="4"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="flex items-center justify-end">
                  <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='w-full p-10 pt-5'>
        <h4 className="text-lg font-semibold mt-4">Headquarters</h4>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.4082834858555!2d76.28874327503091!3d9.983093090121452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d48f57a27df%3A0xbd8601238c88e7ce!2sPremier%20Steels!5e0!3m2!1sen!2sin!4v1729509089342!5m2!1sen!2sin"
          width="100%"
          className='h-64 md:h-96'
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Google Map Location" // Added title for accessibility
        ></iframe>
      </div>
    </div>
  );
};

export default Contacts;
