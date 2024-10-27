import React from 'react';
import { NavLink } from 'react-router-dom';
import companyLogo from '../assets/images/company_logo_bg.png'; // Update the path to your image
import contactImage from '../assets/images/company_logo_bg.png'; // Contact image
import directionImage from '../assets/images/company_logo_bg.png'; // Direction image

import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { ImFacebook2 } from 'react-icons/im';
import { IoLogoYoutube } from 'react-icons/io';
import { companyEmail, companyPhoneNo, featuredProjects, productsList } from '../utils/constants';
import { FiMail, FiYoutube } from 'react-icons/fi';
import { MdOutlineCall } from 'react-icons/md';
import { AiOutlineFacebook } from 'react-icons/ai';

function Footer() {
  return (
    <>
      {/* Footer Section */}
      <div className="bg-black px-6 py-8 lg:px-8 lg:py-28" >
        <div className="flex flex-col lg:flex-row lg:justify-around">
          {/* Left Section: Logo and Address */}
          <div className="mb-2 lg:mb-0 md:mt-2 order-1 flex flex-col items-center text-[#a9a9a9]">
            {/* Logo and Company Name Section */}
            <div className="flex items-center gap-2">
              <NavLink to={'/'} className=''>
                <div style={{ borderRadius: "50%" }} className='bg-selRed-400'>
                  <img src={companyLogo} alt="Company Logo" className={`w-8 h-5 md:w-10 md:h-7 transition-all duration-700 ease-in-out`} />
                </div>
              </NavLink>
              <NavLink to={'/'} className="flex items-center justify-center text-center mt-1">
                <h1 className={`company-font-only text-2xl md:text-3xl transition-all duration-700 ease-in-out font-semibold md:font-bold text-white`}
                >
                  Premier Steels
                </h1>
              </NavLink>
            </div>


            <p className="text-xs md:text-base">STOCK YARD, PULLEPADY ROAD</p>
            <p className="text-xs md:text-base">ERNAKULAM. PIN: 628017</p>

            {/* Pagination dots */}
            <div className="flex justify-center md:justify-start mt-2 space-x-4 footer">
              <a className="flex justify-center items-center" href={`https://wa.me/+91${companyPhoneNo}`} target='blank'>
                <FaWhatsapp size={"1.5rem"} className=" cursor-pointer footer" />
              </a>
              <a className="flex justify-center items-center" href="https://www.facebook.com/people/Luxe-Moto/61556341210047/" target='blank'>
                <AiOutlineFacebook size={"1.5rem"} className=" cursor-pointer footer" />
              </a>
              {/* <FaTwitter size={"1.5rem"} className=" cursor-pointer footer" /> */}
              <a className="flex justify-center items-center" href="https://www.youtube.com/channel/UCG2c97djf6d2yq8ONRlYXGQ/videos" target='blank'>
                <FiYoutube size={"1.5rem"} className=" cursor-pointer footer" />
              </a>
              <a className="flex justify-center items-center" href="https://www.instagram.com/luxe_moto_/" target='blank'>
                <FaInstagram size={"1.5rem"} className=" cursor-pointer footer" />
              </a>
            </div>
          </div>

          {/* Middle Section: Links */}
          <div className="hidden md:flex flex-row lg:space-y-0 lg:space-x-36 order-3 md:order-2 justify-around mt-10 md:mt-0 text-[#a9a9a9]">
            {/* Products */}
            <div>
              <h4 className="font-bold text-base mb-2">PRODUCTS</h4>
              <ul className="space-y-1 columns-1 text-sm md:text-base text-center md:text-start text-[#656565]">
                {productsList.slice(0, 5).map((prod, index) => (
                  <li key={index} className="text-xs md:text-sm uppercase">{prod.title}</li>
                ))}

              </ul>
            </div>

            {/* Information */}
            <div>
              <h4 className="font-bold text-base mb-2">INFORMATION</h4>
              <ul className="space-y-1 text-xs md:text-sm text-center md:text-start text-[#656565]">
                <li >HOME</li>
                <li >PRODUCTS</li>
                <li >BLOG</li>
                <li >ABOUT</li>
                <li >CONTACT</li>
              </ul>
            </div>
          </div>

          {/* Right Section: Contact Info and Button */}
          <div className="mt-4 md:mt-3 flex flex-col items-center order-2 md:order-3 text-[#a9a9a9]">
            <div className='flex flex-col text-center items-center'>
              <h4 className="font-bold text-base ">CONTACT US</h4>
              <span name='mail-btn' className="cursor-pointer text-sm md:text-base flex items-center gap-1 w-fit no-underline uppercase" onClick={() => window.location.href = 'mailto:info.luxemoto@gmail.com'}>
                <FiMail className="text-xl" /> premiersteels0020@gmail.com
              </span>
              <span name='phone-btn' className="cursor-pointer text-sm md:text-base flex items-center gap-1 w-fit" onClick={() => window.location.href = 'tel:+918589043416'}>
                <MdOutlineCall className='text-xl' /> +91 8589043416
              </span>
            </div>

            {/* Enquiry Button */}
            <NavLink to={'/contact'} className="enquiry-btn mt-2 w-fit">
              <span>Contact</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 74 74"
                height="34"
                width="34"
              >
                <circle strokeWidth="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
                <path
                  fill="black"
                  d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                ></path>
              </svg>
            </NavLink>

          </div>
        </div>
      </div>


      <footer className="text-borderColor py-1 md:py-2 bg-selBlack">
        <div className="container md:ml-auto md:pr-5">
          <div className="flex flex-col items-center md:items-end">
            <div className="w-full flex flex-col text-center md:text-right items-center md:items-end text-[.5rem] md:text-[.6rem]">

              {/* Copyright Text */}
              <div className="flex items-center space-x-2">
                <p className="font-medium">
                  ©2024&nbsp;
                  <span className="uppercase">Premier Steels |</span>
                  &nbsp;All Rights Reserved.
                </p>
              </div>

              {/* Powered by Text */}
              <div className="flex flex-col md:flex-row items-center md:justify-end space-y-2 md:space-y-0 md:space-x-2">
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
