import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { NavLink } from 'react-router-dom';
// import companyLogo from '../assets/images/company_logo.jpg'; // Update the path to your image
import companyLogo from '../assets/images/company_logo_bg.png'; // Update the path to your image
import '../assets/css/hamburger.css'
import { moreList } from '../utils/constants';

const Navbar = ({ setIsEnquiryModalOpen }) => {
    const [isOpen, setIsOpen] = useState(false);
    const commonRef = useRef([]);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    useEffect(() => {
        if (isOpen) {
            gsap.fromTo(
                '.common-animation', // Target all elements with this class
                { x: -400, opacity: 0 }, // Alternate entrance direction
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.2, // Slower animation duration
                    ease: 'expo.out',
                    stagger: 0.2, // Slightly increased stagger delay
                }
            );

            gsap.to('.menu-container', {
                x: 0,
                duration: 1.2, // Slower animation duration
                ease: 'expo.out',
            });
        } else {
            gsap.to('.menu-container', {
                x: '-100%',
                duration: 1.4, // Slower animation duration
                ease: 'expo.in',
            });
            gsap.to('.common-animation', {
                x: -300,
                duration: 1, // Slower animation duration
                stagger: 0.2,
                ease: 'expo.in',
            });
        }
    }, [isOpen]);


    return (
        <nav className={` fixed top-0 left-0 flex justify-center w-screen h-24 z-50 overflow-hidden bg-green-body/50 ${isScrolled ? 'bg-black' : ''} transition-colors duration-1000`}>
            <div
                className={`w-full flex justify-between items-center max-w-screen-2xl px-4 ${isScrolled ? 'py-2 md:py-4' : 'py-4 md:py-7'
                    } transition-all duration-700 ease-in-out`}
            >
                {/* Logo Section */}
                <div className="flex items-center gap-1 text-center justify-center ">
                    <NavLink to={'/'} className=''>
                        <div style={{ borderRadius: "50%" }} className='bg-red-400 overflow-hidden p-1 md:p-2'>
                            <img src={companyLogo} alt="Company Logo" className={`w-5 h-5 md:w-10 md:h-7 transition-all duration-700 ease-in-out`} />
                        </div>
                    </NavLink>
                    <NavLink to={'/'} className="flex items-center justify-center text-center mt-1">
                        <h1 className={`company-font text-white transition-all duration-700 ease-in-out font-semibold md:font-bold`}
                        >
                            Premier Steels
                        </h1>
                    </NavLink>
                </div>

                <div className='hidden md:flex justify-center items-center space-x-7'>
                    <div className="px-5 py-2">
                        <ul className="flex w-full">
                            {moreList.map((item, index) => (
                                <li key={index} className="flex-grow flex items-center justify-center">
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) => ` hover:text-red transition duration-300 px-6 py-1 rounded block text-center ${isActive ? 'text-red font-bold' : 'text-white '}`}
                                    // className="text-white hover:bg-gray-700 hover:text-green-300 transition duration-300 px-10 py-1 rounded block text-center"
                                    >
                                        {item.name}
                                    </NavLink>
                                    {index < moreList.length - 1 && (
                                        <div className="h-[20px] w-[1px] bg-borderColor ml-4"></div> // Separate div for the right border
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* "Get Quote" Button */}
                    <div className="text-right">
                        <button
                            className=" bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300"
                            onClick={() => setIsEnquiryModalOpen(true)} // Open the modal
                        >
                            Get Quote
                        </button>
                    </div>
                </div>



                <div className="flex md:hidden justify-center items-center gap-1 cursor-pointer z-50 text-center" onClick={() => setIsOpen(!isOpen)}>
                    <button className={`menu__icon ${isOpen ? 'active' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <p className={`${isScrolled ? 'text-[.7rem] md:text-xs' : 'text-[.8rem] md:text-sm'} text-white transition-all duration-700 ease-in-out font-light`}>
                        {isOpen ? 'CLOSE' : 'MENU'}
                    </p>
                </div>
            </div>



            <div
                className="backdrop-blur-3xl bg-green-body/60 fixed top-0 left-0 w-full md:w-[60vw] lg:w-[45vw] h-full transform -translate-x-full z-40 menu-container overflow-hidden"
            >
                <div className="text-red-500 hover:text-[#fff] font-normal flex flex-col justify-center items-center h-full space-y-4 mr-10 md:mr-0">
                    {moreList.map((item, index) => (
                        <NavLink
                            to={item.path}
                            key={index}
                            className={({ isActive }) => `ml-auto text-lg md:text-xl flex items-center transition-colors duration-300 common-animation hover:font-bold ${isActive ? 'text-white font-bold' : 'text-gray-300'}`}
                            ref={(el) => (commonRef.current[index] = el)}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span>{(item.name)}</span>
                        </NavLink>
                    ))}
                    <button
                        className=" ml-auto bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300"
                        onClick={() => setIsEnquiryModalOpen(true)} // Open the modal
                    >
                        Get Quote
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
