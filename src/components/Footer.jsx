import React from 'react';
import { NavLink } from 'react-router-dom';
import companyLogo from '../assets/images/company_logo_bg.png'; // Update the path to your image
import contactImage from '../assets/images/company_logo_bg.png'; // Contact image
import directionImage from '../assets/images/company_logo_bg.png'; // Direction image

import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { ImFacebook2 } from 'react-icons/im';
import { IoLogoYoutube } from 'react-icons/io';
import { companyEmail, companyPhoneNo, productsList } from '../utils/constants';
import { FiMail } from 'react-icons/fi';

function Footer() {
  return (
    <>
      {/* Gradient background example */}
      {/* <div className="h-96 custom-bg-gradient text-green">
        fayas
      </div> */}
      {/* <div className="h-96 bg-gradient-to-r from-black via-black to-selRed text-white">
        fayas
      </div> */}

      {/* Footer Section */}
      <div className="bg-gradient-to-r from-black via-black to-selRed text-white px-6 py-8 lg:px-8 lg:py-10">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          {/* Left Section: Logo and Address */}
          <div className="mb-2 lg:mb-0">
            {/* Logo and Company Name Section */}
            <div className="flex items-center gap-2">
              <NavLink to={'/'} className=''>
                <div style={{ borderRadius: "50%" }} className='bg-selRed-400'>
                  <img src={companyLogo} alt="Company Logo" className={`w-8 h-5 md:w-10 md:h-7 transition-all duration-700 ease-in-out`} />
                </div>
              </NavLink>
              <NavLink to={'/'} className="flex items-center justify-center text-center mt-1">
                <h1 className={`company-font-only text-2xl md:text-3xl transition-all duration-700 ease-in-out font-semibold md:font-bold`}
                >
                  Premier Steels
                </h1>
              </NavLink>
            </div>


            <p className="text-sm md:text-base">STOCK YARD, PULLEPADY ROAD</p>
            <p className="text-sm md:text-base">ERNAKULAM. PIN: 628017</p>

            {/* Pagination dots */}
            <div className="flex mt-4 space-x-2">
              <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
              <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
              <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
              <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
            </div>
          </div>

          {/* Middle Section: Links */}
          <div className="flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:space-x-12">
            {/* Products */}
            <div>
              <h4 className="font-bold text-base mb-2">PRODUCTS</h4>
              <ul className="space-y-1 columns-2 text-sm md:text-base">
                {productsList.map((prod, index) => (
                  <li key={index} className='text-xs uppercase'>{prod.title}</li>
                ))}
              </ul>
            </div>

            {/* Information */}
            <div>
              <h4 className="font-bold text-base mb-2">INFORMATION</h4>
              <ul className="space-y-1 text-xs md:text-base">
                <li>HOME</li>
                <li>PRODUCTS</li>
                <li>BLOG</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h4 className="font-bold text-base mb-2">OUR SERVICES</h4>
              <ul className="space-y-1 text-xs md:text-base">
                <li>HOME</li>
                <li>PRODUCTS</li>
                <li>BLOG</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
              </ul>
            </div>
          </div>

          {/* Right Section: Contact Info and Button */}
          <div className="mt-8 lg:mt-0">
            <h4 className="font-bold text-base mb-2">CONTACT US</h4>
            <span name='phone-btn' className="cursor-pointer text-sm md:text-base" onClick={() => window.location.href = 'tel:+918589043416'}>
              PHONE: +91 8589043416
            </span>
            <span name='mail-btn' className="cursor-pointer text-sm md:text-base flex items-center gap-1" onClick={() => window.location.href = 'mailto:info.luxemoto@gmail.com'}>
              <FiMail className="text-xl" /> EMAIL: premiersteels0020@gmail.com
            </span>

            {/* Enquiry Button */}
            <div className="mt-4">
              <button className="px-4 py-2 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black rounded">
                ENQUIRY
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
