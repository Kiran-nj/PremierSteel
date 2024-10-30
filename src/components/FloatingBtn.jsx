import React, { useState, useEffect } from 'react';
import { MdOutlineWhatsapp } from 'react-icons/md';
import { companyPhoneNo } from '../utils/constants';

const FloatingBtn = () => {
  return (
    <div className="fixed bottom-0 left-4 md:left-auto md:right-4 z-50">
      
        <a href={`https://wa.me/+91${companyPhoneNo}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn-shadow bg-white/75 text-selRed flex items-center gap-2 px-3 md:px-6 py-2 md:py-3 rounded-t-lg hover:scale-105 transition-transform shadow-2xl shadow-black animate-pulse"
        style={{ 
          
        }}
      >
        <span className="text-sm md:text-xl font-normal">Leave a message</span>
        <MdOutlineWhatsapp className="text-xl md:text-2xl" />
      </a>
    </div>
  );
};

export default FloatingBtn;