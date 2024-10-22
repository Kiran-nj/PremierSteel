import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const Layout = () => {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false); // Modal visibility state
  const [selectedEnqProduct, setSelectedEnqProduct] = useState(null); // Placeholder for product data if needed

  return (
    <div className="">
      <ToastContainer toastClassName="custom-toast" />
      <Navbar setIsEnquiryModalOpen={setIsEnquiryModalOpen} />
      <div>
      <Outlet />

      <EnquiryModal
        isEnquiryModalOpen={isEnquiryModalOpen}
        setIsEnquiryModalOpen={setIsEnquiryModalOpen}
      />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
