import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroContactsSection from '../components/HeroContactsSection';
import { companyEmail, companyPhoneNo } from '../utils/constants';
import { Helmet } from 'react-helmet-async';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { IoCall } from 'react-icons/io5';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { ImFacebook2 } from 'react-icons/im';
import { IoLogoYoutube } from 'react-icons/io';

gsap.registerPlugin(ScrollTrigger);

const Contacts = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
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

      <div className="flex flex-col justify-center md:h-auto py-10">
        <div className=' h-auto md:h-full flex justify-center items-center p-4 md:p-0'>
          <div className=' w-full md:w-[80%] flex flex-col justify-center items-center text-center gap-8 md:gap-10'>
            <div className='flex flex-col justify-center items-center'>
              <h2 className='font-bold text-lg md:text-5xl uppercase'>Reach Us</h2>
              <div className="h-[3px] md:h-[10px] w-full bg-selRed mt-[-2px]"></div>
            </div>
            <div className="space-y-2 text-sm md:text-base">
              <p>Reach out to us for any queries regarding our products and services.</p>
              <p>We are here to help and guide you through our offerings.</p>
            </div>

            <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 w-full px-5 md:px-0">
              <ContactCard icon={<IoCall />} title="Call Us" text={`+91 ${companyPhoneNo}`} />
              <ContactCard icon={<MdLocationOn />} title="Address"  text={`Premier Steels\nStock Yard, Pullepady Road\nErnakulam, PIN: 628017`}/>
              <ContactCard icon={<MdEmail />} title="Email Us" text={companyEmail} />
            </div>

            <div className="flex justify-center space-x-5 md:space-x-10 mt-4">
              <SocialLink href={`https://wa.me/+91${companyPhoneNo}`} icon={<FaWhatsapp />} />
              <SocialLink href="https://www.facebook.com/people/Luxe-Moto/61556341210047/" icon={<ImFacebook2 />} />
              <SocialLink href="https://www.youtube.com/channel/UCG2c97djf6d2yq8ONRlYXGQ/videos" icon={<IoLogoYoutube />} />
              <SocialLink href="https://www.instagram.com/luxe_moto_/" icon={<FaInstagram />} />
            </div>
          </div>
        </div>

      </div>

      <div className="bg-selBlack text-white py-8 md:py-10">
        <div className='flex flex-col justify-center items-center px-4 text-center gap-8 md:gap-10'>
          <div className='flex flex-col justify-center items-center'>
              <h2 className='font-bold text-lg md:text-5xl uppercase'>Get in Touch</h2>
            <div className="h-[1px] w-[40%] bg-white mt-3"></div>
          </div>

          <div className='text-sm md:text-base'>
            <p>We're here to answer any questions and provide support.</p>
            <p>Feel free to leave us a message, and we'll get back to you promptly.</p>
          </div>

          <form className="flex flex-col space-y-4 w-full max-w-md">
            <div className='flex flex-col md:flex-row md:space-x-5 text-black w-full'>
              <input type="text" placeholder="Your Name" className="p-2 bg-gray-200 text-black focus:outline-none w-full placeholder:text-xs md:placeholder:text-base" />
              <input type="email" placeholder="Your Email" className="p-2 bg-gray-200 text-black focus:outline-none w-full placeholder:text-xs md:placeholder:text-base" />
            </div>
            <textarea placeholder="Your Message" className="p-2 bg-gray-200 text-black focus:outline-none w-full placeholder:text-xs md:placeholder:text-base" rows="4" />
            <div className='flex justify-end'>
              <button type="submit" className="relative group overflow-hidden border-2 px-4 py-2 border-[#E5B80B] w-fit">
                <span className="font-bold text-white text-sm relative z-10 group-hover:text-[#E5B80B] duration-500">Send Message</span>
                <span className="absolute top-0 left-0 w-full bg-[#E5B80B] duration-500 group-hover:-translate-x-full h-full"></span>
                <span className="absolute top-0 left-0 w-full bg-[#E5B80B] duration-500 group-hover:translate-x-full h-full"></span>
                <span className="absolute top-0 left-0 w-full bg-[#E5B80B] duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                <span className="absolute delay-300 top-0 left-0 w-full bg-[#E5B80B] duration-500 group-hover:translate-y-full h-full"></span>
              </button>
            </div>
          </form>
        </div>
      </div>


      <div className='h-96 md:h-96'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.4082834858555!2d76.28874327503091!3d9.983093090121452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d48f57a27df%3A0xbd8601238c88e7ce!2sPremier%20Steels!5e0!3m2!1sen!2sin!4v1729509089342!5m2!1sen!2sin"
            width="100%"
            className="h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Google Map Location"
          ></iframe>
        </div>
    </div>
  );
};

const ContactCard = ({ icon, title, text }) => (
  <button className="bg-selRed shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col h-48 relative uppercase hover:bg-red-800">
    {/* Title section */}
    <div className="bg-white text-selRed h-1/5 flex items-center justify-center w-full">
      <h2 className="text-xl md:text-2xl font-normal">{title}</h2>
    </div>
    
    {/* Content section */}
    <div className="flex-grow flex items-center justify-center w-full">
      <p className="text-center whitespace-pre-line font-extrabold">{text}</p>
    </div>
  </button>
);


const SocialLink = ({ href, icon }) => (
  <a className="flex justify-center items-center text-3xl md:text-5xl" href={href} target="_blank" rel="noopener noreferrer">
    {icon}
  </a>
);

export default Contacts;
