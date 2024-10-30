import React from 'react';
import { NavLink } from 'react-router-dom';
import companyLogo from '../assets/images/company_logo_bg.png'; // Update the path to your image
import contactImage from '../assets/images/company_logo_bg.png'; // Contact image
import directionImage from '../assets/images/company_logo_bg.png'; // Direction image

import { FaArrowRight, FaArrowUp, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { ImFacebook2 } from 'react-icons/im';
import { IoLogoYoutube } from 'react-icons/io';
import { companyEmail, companyPhoneNo, featuredProjects, productsList } from '../utils/constants';
import { FiMail, FiYoutube } from 'react-icons/fi';
import { MdOutlineCall } from 'react-icons/md';
import { AiOutlineFacebook } from 'react-icons/ai';
import { FaArrowUpLong } from 'react-icons/fa6';

function Footer({ setIsEnquiryModalOpen }) {
  return (
    <>
      <div className='bg-red-950 text-white h-auto flex flex-col justify-center items-center py-5 md:py-10'>
        <div className='space-y-1 md:space-y-5 flex flex-col justify-center items-center'>
          <div className='text-center text-xl md:text-5xl font-thin mb-1 md:mb-0'>
            <h1 className=''>Request a Quote Online <span className='font-bold text-white'>24/7</span></h1>
            {/* <h1 className='block md:hidden'>Request a Quote</h1>
            <h1 className='block md:hidden font-bold text-white'>Online 24/7</h1> */}
          </div>

          <button className="request-button"
            onClick={() => setIsEnquiryModalOpen(true)}
          >
            <svg
              viewBox="0 0 24 24"
              className="arr-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
            <span className="text">Request a Quote</span>
            <span className="circle"></span>
            <svg
              viewBox="0 0 24 24"
              className="arr-1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
          </button>


        </div>
        <div className='mt-2 text-xs md:text-base text-white' onClick={() => window.location.href = `tel:+91${companyPhoneNo}`}>
          <h1 >or call +91 {companyPhoneNo}</h1>
        </div>
      </div>


      <div className='bg-black md:px-20 py-5 md:py-14'>
        {/* Footer Section */}
        {/* <div className="py-8 flex flex-col lg:flex-row justify-between items-center border-b-2 border-gray-700"> */}
        {/* Left Section: Logo, Company Name, and Tagline */}
        <div className="flex flex-col md:items-center md:mb-4 lg:mb-0 lg:mr-8 text-[#a9a9a9]">
          <NavLink to="/" className="flex items-center">
            <div className="bg-selRed-400 rounded-full p-2 flex items-center">
              <img src={companyLogo} alt="Company Logo" className="w-5 h-5 lg:w-10 lg:h-6 transition-all duration-700 ease-in-out" />
            </div>
            <h1 className="company-font-only text-2xl md:text-3xl font-semibold md:font-bold text-white">
              Premier Steels
            </h1>
          </NavLink>
          <div className='hidden md:flex w-full justify-center'>
            <p className="text-xs md:text-sm text-white ">
              Quality • Strength • Durability
            </p>
          </div>
          <div className="h-[1px] w-[60%] bg-lineGray mt-5 hidden md:block"></div>

        </div>


        {/* Location, Products, Information, and Contact Sections */}
        <div className="flex flex-col lg:flex-row lg:justify-around text-[#a9a9a9] space-y-2 md:space-y-10 lg:space-y-0 md:mt-8 pl-2 md:pl-0">
          {/* Location Section */}
          <div className="flex flex-col items-start text-center lg:items-start lg:text-left order-1">
            <h4 className="font-bold text-sm mb-2 hidden md:block">LOCATION</h4>
            <p className="text-xs md:text-xs">STOCK YARD, PULLEPADY ROAD</p>
            <p className="text-xs md:text-xs">ERNAKULAM, PIN: 628017</p>
          </div>

          {/* Products Section */}
          <div className="flex flex-col items-start  md:text-center lg:items-start lg:text-left order-3 md:order-2">
            <h4 className="font-bold text-sm mb-2">PRODUCTS</h4>
            <ul className="space-y-1 text-xs md:text-xs text-lineGray">
              {productsList.slice(0, 5).map((prod, index) => (
                <li key={index} className="uppercase">{prod.title}</li>
              ))}
            </ul>
          </div>

          {/* Information Section */}
          <div className="flex flex-col items-start  md:text-center lg:items-start lg:text-left order-4 md:order-3">
            <h4 className="font-bold text-sm mb-2">INFORMATION</h4>
            <ul className="space-y-1 text-xs md:text-xs text-lineGray">
              <li>HOME</li>
              <li>PRODUCTS</li>
              <li>BLOG</li>
              <li>ABOUT</li>
              <li>CONTACT</li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="flex flex-col items-start text-center lg:items-end lg:text-left order-2 md:order-4 pb-5 md:pb-0">
            <h4 className="font-bold text-sm mb-2 hidden md:block">CONTACT US</h4>
            <span className="cursor-pointer text-xs md:text-xs flex items-center gap-1 uppercase" onClick={() => window.location.href = `mailto:${companyEmail}`}>
              <FiMail className="text-xl" /> {companyEmail}
            </span>
            <span className="cursor-pointer text-xs md:text-xs flex items-center gap-1" onClick={() => window.location.href = `tel:+91${companyPhoneNo}`}>
              <MdOutlineCall className='text-xl' /> +91 {companyPhoneNo}
            </span>

            <div className=" flex md:hidden items-center gap-5 w-full flex-1 text-white pt-4">
              <a href={`https://wa.me/+91${companyPhoneNo}`} target="_blank" rel="noreferrer" className=" hover:text-white transition-colors">
                <FaWhatsapp size="1.5rem" className="cursor-pointer" />
              </a>
              <a href="https://www.facebook.com/people/Luxe-Moto/61556341210047/" target="_blank" rel="noreferrer" className=" hover:text-white transition-colors">
                <AiOutlineFacebook size="1.5rem" className="cursor-pointer" />
              </a>
              <a href="https://www.youtube.com/channel/UCG2c97djf6d2yq8ONRlYXGQ/videos" target="_blank" rel="noreferrer" className=" hover:text-white transition-colors">
                <FiYoutube size="1.5rem" className="cursor-pointer" />
              </a>
              <a href="https://www.instagram.com/luxe_moto_/" target="_blank" rel="noreferrer" className=" hover:text-white transition-colors">
                <FaInstagram size="1.5rem" className="cursor-pointer" />
              </a>
            </div>
          </div>
        </div>

        <div className="hidden md:flex justify-center lg:justify-center items-center gap-4 pb-2 lg:pb-2 w-full flex-1 text-white pt-12">
          <a href={`https://wa.me/+91${companyPhoneNo}`} target="_blank" rel="noreferrer" className=" hover:text-white transition-colors">
            <FaWhatsapp size="1.5rem" className="cursor-pointer" />
          </a>
          <a href="https://www.facebook.com/people/Luxe-Moto/61556341210047/" target="_blank" rel="noreferrer" className=" hover:text-white transition-colors">
            <AiOutlineFacebook size="1.5rem" className="cursor-pointer" />
          </a>
          <a href="https://www.youtube.com/channel/UCG2c97djf6d2yq8ONRlYXGQ/videos" target="_blank" rel="noreferrer" className=" hover:text-white transition-colors">
            <FiYoutube size="1.5rem" className="cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/luxe_moto_/" target="_blank" rel="noreferrer" className=" hover:text-white transition-colors">
            <FaInstagram size="1.5rem" className="cursor-pointer" />
          </a>
        </div>



      </div>
      {/* powered by section */}
      <footer className="text-lineGray py-1 md:py-2 bg-black">
        <div className="container mx-auto md:px-5">
          <div className="flex flex-col md:flex-row items-center md:justify-center">
            <div className="flex flex-col text-right md:text-center w-full items-end md:items-center text-[.5rem] md:text-[.6rem]">

              {/* Copyright Text */}
              <div className="flex items-center justify-end md:justify-center space-x-2">
                <p className="font-medium">
                  ©2024&nbsp;
                  <span className="uppercase">Premier Steels |</span>
                  &nbsp;All Rights Reserved.
                </p>
              </div>

              {/* Powered by Text */}
              <div className="flex flex-col md:flex-row items-center md:justify-center space-y-2 md:space-y-0 md:space-x-2">
                <p className="text-[.5rem] md:text-[.6rem] scale-90 md:scale-95 font-medium">
                  Powered by
                  <a href="https://cyfletech.com" className="text-blue ml-1" target="_blank" rel="noopener noreferrer">
                    <strong className="font-normal text-white">Cyfletech</strong>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
}

export default Footer;
