import React, { useState, useEffect } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { companyPhoneNo } from '../utils/constants';
import { RiWhatsappFill } from 'react-icons/ri';
import { MdOutlineWhatsapp } from 'react-icons/md';

const FloatingBtn = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    // Hide the tooltip after 5 seconds
    const timer = setTimeout(() => setShowTooltip(false), 5000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-7 md:bottom-10 right-1 md:right-4 z-50 flex flex-col items-end">
      {/* Comic-Style Tooltip */}
      {showTooltip && (
        <div className="relative bg-selWhite text-selBlack text-xs md:text-sm p-2 rounded-md mb-1 speech-bubble animate-bounce">
          Chat with us
          <div className="speech-bubble-tail absolute top-full right-6"></div>
        </div>
      )}
      {/* WhatsApp Button */}
      <a
        
        style={{ background: "linear-gradient(to right, #fbdea2, #AD9515)" }}
        href={`https://wa.me/+91${companyPhoneNo}`} // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#c19130] p-2 rounded-full transition-transform transform hover:scale-110 focus:outline-none animate-pulse"
      >
        <MdOutlineWhatsapp className="text-selWhite  text-4xl md:text-5xl " />
      </a>
    </div>
  );
};

export default FloatingBtn;
