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
      <div className='bg-black'>
        {/* Footer Section */}
        <div className="px-6 py-8 lg:px-8 lg:py-28" >
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
                <span name='phone-btn' className="cursor-pointer text-sm md:text-base flex items-center gap-1 w-fit" onClick={() => window.location.href = `tel:+91${companyPhoneNo}`}>
                  <MdOutlineCall className='text-xl' /> +91 8589043416
                </span>
              </div>

              {/* Enquiry Button */}
              <NavLink to={'/contact'}
                className="text-xs mt-2 flex justify-center gap-1 items-center mx-auto shadow-xl bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-borderColor hover:text-white before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-2 py-2 overflow-hidden border-[.5px] rounded-none group"
              >
                Contact
                <div className="rotate-45 border rounded-full p-1 transition-transform duration-300 group-hover:rotate-90">
                  <FaArrowUpLong className='text-[.4rem]' />
                </div>
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
      </div>

    </>
  );
}

export default Footer;
