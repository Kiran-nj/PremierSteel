import React from 'react';
import { NavLink } from 'react-router-dom';
import companyLogo from '../assets/images/company_logo_bg.png'; // Update the path to your image
import contactImage from '../assets/images/company_logo_bg.png'; // Contact image
import directionImage from '../assets/images/company_logo_bg.png'; // Direction image

import {
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io";
import { companyEmail, companyPhoneNo } from '../utils/constants';

function Footer() {
  return (
    <div className='bg-white p-2 md:p-5'>
      <div className='bg-black rounded-2xl text-white py-4'>

        {/* Logo and Company Name Section */}
        <div className="flex items-center justify-center ">
          <NavLink to={'/'}>
            <div style={{ borderRadius: "50%" }} className="bg-red-400 overflow-hidden bg-black p-1 md:p-2">
              <img
                src={companyLogo}
                alt="Company Logo"
                className={`w-5 h-5 md:w-10 md:h-7 transition-all duration-700 ease-in-out`}
              />
            </div>
          </NavLink>
          <NavLink to={'/'} className="flex items-center justify-center text-center">
            <h1
              className={`company-font text-sm md:text-2xl transition-all duration-700 ease-in-out font-semibold md:font-bold`}
            >
              Premier Steels
            </h1>
          </NavLink>
        </div>

        {/* Google Maps and Let's Connect Section */}
        <div className='pt-8 px-5 items-center justify-center'>
          <div className='flex flex-col md:flex-row justify-between items-center'>

            {/* Google Maps Section */}
            <div className="flex justify-center items-center md:w-1/3 md:h-96 md:mb-0 order-3 md:order-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.4082834858555!2d76.28874327503091!3d9.983093090121452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d48f57a27df%3A0xbd8601238c88e7ce!2sPremier%20Steels!5e0!3m2!1sen!2sin!4v1729509089342!5m2!1sen!2sin"
                className='w-full h-full rounded-xl'
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Let's Connect Section */}
            <div className="flex flex-col md:w-1/3 mx-4 mb-6 md:mb-0 order-2">
              <h2 className="text-lg font-bold mb-4">Let's Connect</h2>
              <form className="flex flex-col space-y-4 w-full"> {/* Added w-full for full width */}
                <div className='flex space-x-5 text-black w-full'>

                  <input
                    type="text"
                    placeholder="Your Name"
                    className="p-2 bg-gray-200 text-black rounded-md focus:outline-none w-full" // Added w-full for full width
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="p-2 bg-gray-200 text-black rounded-md focus:outline-none w-full" // Added w-full for full width
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  className="p-2 bg-gray-200 text-black rounded-md focus:outline-none w-full" // Added w-full for full width
                  rows="4"
                />
                <button type="submit" className="bg-green-500 text-white py-2 rounded-md hover:bg-green-600 w-full md:w-1/2"> {/* Added w-full for full width */}
                  Send Message
                </button>
              </form>
            </div>

            {/* Connect With Us Section */}
            <div className="flex flex-col md:w-1/3 mx-4 mb-6 md:mb-0 order-1 md:order-3">
              {/* Get In Touch Section */}
              <div className="mt-6 md:mt-0">
                <h3 className="text-lg font-semibold">Get In Touch</h3>
                <p>Phone: +{companyPhoneNo}</p>
                <p>Email: {companyEmail}</p>
              </div>

              {/* Find Us At Section */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold">Find Us At</h3>
                <p>Premier Steels, Pullepady ROB, Thammanam-Pullepady Road, Ernakulam, 628018</p>
              </div>

              <div className="flex justify-start mt-6 space-x-4 footer text-white">
                <a className="flex justify-center items-center" href={`https://wa.me/${companyPhoneNo}`} target='blank'>
                  <FaWhatsapp size={"1.5rem"} className=" cursor-pointer footer" />
                </a>
                <a className="flex justify-center items-center" href="https://www.facebook.com/people/Luxe-Moto/61556341210047/" target='blank'>
                  <ImFacebook2 size={"1.5rem"} className=" cursor-pointer footer" />
                </a>
                {/* <FaTwitter size={"1.5rem"} className=" cursor-pointer footer" /> */}
                <a className="flex justify-center items-center" href="https://www.youtube.com/channel/UCG2c97djf6d2yq8ONRlYXGQ/videos" target='blank'>
                  <IoLogoYoutube size={"1.5rem"} className=" cursor-pointer footer" />
                </a>
                <a className="flex justify-center items-center" href="https://www.instagram.com/luxe_moto_/" target='blank'>
                  <FaInstagram size={"1.5rem"} className=" cursor-pointer footer" />
                </a>
              </div>
            </div>
          </div>
        </div>



        {/* Footer Section */}
        <footer className="text-black py-6">
          <div className="container mx-auto">
            <div className="text-white container flex flex-col items-center px-4 md:px-8 font-josefin">
              <div className="w-full flex flex-col items-center text-[.6rem] md:text-[.7rem]">
                <div className="flex items-center space-x-2 text-center">
                  <p className="scale-110 font-medium">
                    © 2024 &nbsp;
                    <span className="">Premier Steels</span>
                    &nbsp; All Rights Reserved.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
                  <p className="text-[.5rem] md:text-[.6rem] scale-90 md:scale-95 text-center font-medium">
                    Designed & Developed by
                    <a href="https://cyfletech.com" className="text-blue ml-1" target="_blank" rel="noopener noreferrer">
                      <strong className="font-normal text-green-300">Cyfletech</strong>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
