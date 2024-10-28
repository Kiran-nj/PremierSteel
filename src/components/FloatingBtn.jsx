import React, { useState, useEffect } from 'react';
import { MdOutlineWhatsapp } from 'react-icons/md';
import { companyPhoneNo } from '../utils/constants';

const FloatingBtn = () => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      
        <a href={`https://wa.me/+91${companyPhoneNo}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
        style={{ 
        /*   background: "linear-gradient(to right, #fbdea2, #AD9515)", */
        background: "linear-gradient(to right, #25D366, #075E54)",

        }}
      >
        <MdOutlineWhatsapp className="text-white text-2xl" />
        <span className="text-white font-medium">Leave a message</span>
      </a>
    </div>
  );
};

export default FloatingBtn;