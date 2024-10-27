// Layout.js
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import FloatingBtn from './components/FloatingBtn';
import { bgImg } from './utils/constants';

const Layout = () => {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false); // Modal visibility state
  const [selectedEnqProduct, setSelectedEnqProduct] = useState(null); // Placeholder for product data if needed

  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="your-main-container bg-contain md:bg-contain bg-center min-h-screen flex flex-col"
    >
      <div className="bg-selBlack/90 flex-grow md:pb-0"> {/* Add pb-16 for bottom space on mobile */}
        <FloatingBtn  />
        <ToastContainer toastClassName="custom-toast" />
        <Navbar setIsEnquiryModalOpen={setIsEnquiryModalOpen} />
        
        <div className="flex-grow">
          <Outlet />

          <EnquiryModal
            isEnquiryModalOpen={isEnquiryModalOpen}
            setIsEnquiryModalOpen={setIsEnquiryModalOpen}
          />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
