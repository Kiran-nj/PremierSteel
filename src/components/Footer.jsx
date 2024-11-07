import React from 'react';
import { NavLink } from 'react-router-dom';
import companyLogo from '../assets/images/company_logo_bg.png'; // Update the path to your image
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { AiOutlineFacebook } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { MdOutlineCall } from 'react-icons/md';
import { companyEmail, companyPhoneNo, productsList } from '../utils/constants';

function Footer({ setIsEnquiryModalOpen }) {
  return (
    <>
      {/* Common Quote Section for All Screens */}
      <div className='bg-red-950 text-white h-auto flex flex-col justify-center items-center py-5 md:py-10'>
        <div className='space-y-1 md:space-y-5 flex flex-col justify-center items-center'>
          <div className='text-center text-xl md:text-5xl font-thin mb-1 md:mb-0'>
            <h1>Request a Quote Online <span className='font-bold text-white'>24/7</span></h1>
          </div>
          <button className="request-button" onClick={() => setIsEnquiryModalOpen(true)}>
            <span className="text">Request a Quote</span>
          </button>
        </div>
        <div className='mt-2 text-xs md:text-base text-white' onClick={() => window.location.href = `tel:+91${companyPhoneNo}`}>
          <h1>or call +91 {companyPhoneNo}</h1>
        </div>
      </div>

      {/* Footer Section for Larger Screens */}
      <div className="hidden md:block bg-black md:px-20 py-5 md:py-14">
        <div className="flex flex-col md:items-center md:mb-4 lg:mb-0 lg:mr-8 text-[#a9a9a9]">
          <NavLink to="/" className="flex items-center">
            <img src={companyLogo} alt="Company Logo" className="w-5 h-5 lg:w-10 lg:h-6" />
            <h1 className="company-font-only text-2xl md:text-3xl font-semibold text-white">Premier Steels</h1>
          </NavLink>
          <p className="text-xs md:text-sm text-white hidden md:block">Quality • Strength • Durability</p>
        </div>

        {/* Location, Products, Information, and Contact Sections */}
        <div className="flex flex-col lg:flex-row lg:justify-around text-[#a9a9a9] md:space-y-1 md:mt-8">
          <div className="flex flex-col items-start text-center lg:text-left">
            <h4 className="font-bold text-sm mb-2 hidden md:block">LOCATION</h4>
            <p className="text-xs">STOCK YARD, PULLEPADY ROAD</p>
            <p className="text-xs">ERNAKULAM, PIN: 628017</p>
          </div>
          <div className="flex flex-col items-start text-center lg:text-left">
            <h4 className="font-bold text-sm mb-2">PRODUCTS</h4>
            <ul className="space-y-1 text-xs">
              {productsList.slice(0, 5).map((prod, index) => (
                <li key={index} className="uppercase">{prod.title}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-start text-center lg:text-left">
            <h4 className="font-bold text-sm mb-2">INFORMATION</h4>
            <ul className="space-y-1 text-xs">
              <li>HOME</li>
              <li>PRODUCTS</li>
              <li>BLOG</li>
              <li>ABOUT</li>
              <li>CONTACT</li>
            </ul>
          </div>
          <div className="flex flex-col items-start text-center lg:text-left">
            <h4 className="font-bold text-sm mb-2 hidden md:block">CONTACT US</h4>
            <span className="cursor-pointer text-xs flex items-center gap-1" onClick={() => window.location.href = `mailto:${companyEmail}`}>
              <FiMail className="text-xl" /> {companyEmail}
            </span>
            <span className="cursor-pointer text-xs flex items-center gap-1" onClick={() => window.location.href = `tel:+91${companyPhoneNo}`}>
              <MdOutlineCall className='text-xl' /> +91 {companyPhoneNo}
            </span>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 pt-12 text-white">
          <a href={`https://wa.me/+91${companyPhoneNo}`} target="_blank" rel="noreferrer">
            <FaWhatsapp size="1.5rem" />
          </a>
          <a href="https://www.facebook.com/people/Premier-Steels/100070995211277/" target="_blank" rel="noreferrer">
            <AiOutlineFacebook size="1.5rem" />
          </a>
          <a href="https://www.instagram.com/premiersteelsindia/" target="_blank" rel="noreferrer">
            <FaInstagram size="1.5rem" />
          </a>
        </div>
      </div>

      {/* Footer Section for Small Screens */}
      <div className="block md:hidden bg-black text-[#a9a9a9] py-5">
        <div className="text-center text-white mb-4">
          <h1 className="text-xl font-semibold">Premier Steels</h1>
          <p className="text-xs">Quality • Strength • Durability</p>
        </div>

        <div className="text-center space-y-2 text-xs">
          <h4 className="font-bold">LOCATION</h4>
          <p>STOCK YARD, PULLEPADY ROAD</p>
          <p>ERNAKULAM, PIN: 628017</p>

          <div className="flex text-center justify-center items-center gap-20">

            <div>
          <h4 className="font-bold text-sm mb-2">PRODUCTS</h4>
          <ul className="space-y-1">
            {productsList.slice(0, 5).map((prod, index) => (
              <li key={index} className="uppercase">{prod.title}</li>
            ))}
          </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-2">INFORMATION</h4>
            <ul className="space-y-1 text-xs">
              <li>HOME</li>
              <li>PRODUCTS</li>
              <li>BLOG</li>
              <li>ABOUT</li>
              <li>CONTACT</li>
            </ul>
            </div>
          </div>

          <h4 className="font-bold mt-3">CONTACT</h4>
          <span onClick={() => window.location.href = `mailto:${companyEmail}`} className="cursor-pointer block">Email: {companyEmail}</span>
          <span onClick={() => window.location.href = `tel:+91${companyPhoneNo}`} className="cursor-pointer block">Phone: +91 {companyPhoneNo}</span>
        </div>

        <div className="flex justify-center gap-4 pt-4 text-white">
          <a href={`https://wa.me/+91${companyPhoneNo}`} target="_blank" rel="noreferrer">
            <FaWhatsapp size="1.5rem" />
          </a>
          <a href="https://www.facebook.com/people/Premier-Steels/100070995211277/" target="_blank" rel="noreferrer">
            <AiOutlineFacebook size="1.5rem" />
          </a>
          <a href="https://www.instagram.com/premiersteelsindia/" target="_blank" rel="noreferrer">
            <FaInstagram size="1.5rem" />
          </a>
        </div>
      </div>

      <footer className="text-lineGray py-1 bg-black text-center text-[.5rem]">
        <p>©2024 Premier Steels | All Rights Reserved. Powered by <a href="https://cyfletech.com" target="_blank" rel="noopener noreferrer" className="text-blue">Cyfletech</a></p>
      </footer>
    </>
  );
}

export default Footer;
