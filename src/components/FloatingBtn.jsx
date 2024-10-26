import React, { useState, useRef } from 'react';
import { TbPhonePlus } from "react-icons/tb";
import gsap from 'gsap';

const FloatingBtn = ({ setIsEnquiryModalOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsEnquiryModalOpen(true);
  };

  return (
    <div className="fixed md:hidden inset-0 flex items-center w-fit ml-auto z-50">
      {/* <button
        type='button'
        ref={buttonRef}
        onClick={toggleMenu}
        className="animate-pulse ml-auto mr-[-2.3rem] h-fit px-5 py-2 bg-selRed/50 hover:bg-selRed transition duration-300 ease-in-out text-white rounded-none shadow-lg border border-borderColor hover:border-0 rounded-b-lg"
        style={{ transform: 'rotate(90deg)' }}
      >
       Get Quote
      </button> */}
       <button
        type='button'
        ref={buttonRef}
        onClick={toggleMenu}
        className="animate-pulse ml-auto mr-[-2.3rem] h-fit px-5 py-2 bg-selRed/50 hover:bg-selRed transition duration-300 ease-in-out text-white rounded-none shadow-lg border border-borderColor hover:border-0 rounded-b-lg"
        style={{ transform: 'rotate(90deg)' }}
      >
       Get Quote
      </button>
      
      {/* <button className="gas he ml-auto mr-[-2.1rem] px-5 py-2 rounded-b-lg"
        style={{ transform: 'rotate(90deg)' }}
        type='button'
        onClick={toggleMenu}
        >
      <h2 className="symbol">Get Quote</h2>
    </button> */}


    </div>
  );
};

export default FloatingBtn;
