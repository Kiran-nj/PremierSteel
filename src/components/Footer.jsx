import React from 'react';
import { NavLink } from 'react-router-dom';
import companyLogo from '../assets/images/company_logo_bg.png';
import { FaArrowRight, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdOutlineCall } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';
import { AiOutlineFacebook } from 'react-icons/ai';
import { companyEmail, companyPhoneNo, productsList } from '../utils/constants';

function Footer({ setIsEnquiryModalOpen }) {
  return (
    <>
      <div className='bg-red-950 text-white py-5 md:py-10 flex flex-col items-center'>
        <div className='text-center text-xl md:text-2xl font-thin mb-4'>
          <h1>Request a Quote Online <span className='font-bold text-white'>24/7</span></h1>
        </div>

        <button
          className="request-button flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-all"
          onClick={() => setIsEnquiryModalOpen(true)}
        >
          Request a Quote
          <FaArrowRight />
        </button>

        <div
          className='mt-3 text-xs md:text-sm cursor-pointer'
          onClick={() => window.location.href = `tel:+91${companyPhoneNo}`}
        >
          or call +91 {companyPhoneNo}
        </div>
      </div>

      <div className='bg-black text-[#a9a9a9] px-5 md:px-20 py-8 md:py-14'>
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start">
          {/* Logo and Company Name */}
          <div className="flex flex-col items-center mb-4 md:mb-0 md:mr-8 text-white">
            <NavLink to="/" className="flex items-center gap-2">
              <img src={companyLogo} alt="Company Logo" className="w-10 h-10" />
              <h1 className="text-2xl md:text-3xl font-bold">Premier Steels</h1>
            </NavLink>
          </div>

          {/* Location, Products, Information, Contact Sections */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-20 text-sm w-full md:w-auto">
            <div className="text-center md:text-left">
              <h4 className="font-bold mb-2">LOCATION</h4>
              <p>STOCK YARD, PULLEPADY ROAD</p>
              <p>ERNAKULAM, PIN: 628017</p>
            </div>
            <div className='flex gap-20 mx-auto'>
            <div className="text-center md:text-left">
              <h4 className="font-bold mb-2">PRODUCTS</h4>
              <ul className="space-y-1">
                {productsList.slice(0, 5).map((prod, index) => (
                  <li key={index} className="uppercase">{prod.title}</li>
                ))}
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h4 className="font-bold mb-2">INFORMATION</h4>
              <ul className="space-y-1">
                <li>HOME</li>
                <li>PRODUCTS</li>
                <li>BLOG</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
              </ul>
            </div>
            </div>

            <div className="text-center md:text-left justify-center">
  <h4 className="font-bold mb-2">CONTACT US</h4>
  <p
    className="flex items-center gap-2 cursor-pointer justify-center"
    onClick={() => window.location.href = `mailto:${companyEmail}`}
  >
    <FiMail /> {companyEmail}
  </p>
  <p
    className="flex items-center gap-2 cursor-pointer mt-1 justify-center"
    onClick={() => window.location.href = `tel:+91${companyPhoneNo}`}
  >
    <MdOutlineCall /> +91 {companyPhoneNo}
  </p>
</div>

          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-8 flex justify-center gap-5">
          <a href={`https://wa.me/+91${companyPhoneNo}`} target="_blank" rel="noreferrer">
            <FaWhatsapp className="text-white hover:text-gray-400 transition-colors" size="1.5rem" />
          </a>
          <a href="https://www.facebook.com/people/Premier-Steels/100070995211277/" target="_blank" rel="noreferrer">
            <AiOutlineFacebook className="text-white hover:text-gray-400 transition-colors" size="1.5rem" />
          </a>
          <a href="https://www.instagram.com/premiersteelsindia/" target="_blank" rel="noreferrer">
            <FaInstagram className="text-white hover:text-gray-400 transition-colors" size="1.5rem" />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <footer className="text-[#a9a9a9] py-2 bg-black text-center text-xs">
        <p>©2024 Premier Steels | All Rights Reserved.</p>
        <p className="mt-1">
          Powered by
          <a href="https://cyfletech.com" className="text-blue ml-1" target="_blank" rel="noopener noreferrer">
            <strong className="text-white">Cyfletech</strong>
          </a>
        </p>
      </footer>
    </>
  );
}

export default Footer;
