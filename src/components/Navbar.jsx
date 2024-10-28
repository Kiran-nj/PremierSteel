import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { companyLogo } from '../utils/constants';

export const navLists = [
    { name: 'Home', path: '/', order: 1 },
    { name: 'Products', path: '/products', order: 2 },
    { name: 'Blog', path: '/blog', order: 3 },
    { name: 'About', path: '/about', order: 4 },
    { name: 'Contact', path: '/contact', order: 5 },
];

const Navbar = ({ setIsEnquiryModalOpen }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const scrollThreshold = 50; // Set a scroll threshold to minimize accidental hiding

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        // Only hide/show navbar based on scroll distance
        if (Math.abs(currentScrollY - lastScrollY) > scrollThreshold) {
            if (currentScrollY > lastScrollY) {
                setIsNavbarVisible(false); // Scrolling down
            } else {
                setIsNavbarVisible(true); // Scrolling up
            }
        }

        setLastScrollY(currentScrollY);

        // Change navbar background on scroll
        if (currentScrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    // Debounce function
    const debounce = (func, delay) => {
        let timeoutId;
        return (...args) => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                func.apply(null, args);
            }, delay);
        };
    };

    useEffect(() => {
        // Create a debounced version of the handleScroll function
        const handleScrollDebounced = debounce(handleScroll, 100);
        window.addEventListener('scroll', handleScrollDebounced);

        return () => {
            window.removeEventListener('scroll', handleScrollDebounced);
        };
    }, [lastScrollY]);


    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 ease-in-out
                ${isScrolled ? 'bg-selBlack' : 'bg-transparent'}
                ${isMobileMenuOpen && isScrolled ? '' : 'bg-red-950/30'}
                ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}
            `}
        >

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className={`flex ${isScrolled ? 'h-12 md:h-24' : 'h-16 md:h-24'} items-center justify-between transition-all duration-1000`}>
                    {/* <div className="flex h-20 md:h-24 items-center justify-between"> */}
                    {/* Logo and Company Name */}
                    <div className="flex items-center gap-1 text-center justify-center">
                        <NavLink to="/">
                            <div style={{ borderRadius: "50%" }} className="overflow-hidden p-1 lg:p-2">
                                <img src={companyLogo} alt="Company Logo" className="w-5 h-5 lg:w-10 lg:h-7 transition-all duration-700 ease-in-out" />
                            </div>
                        </NavLink>
                        <NavLink to="/" className="flex items-center justify-center text-center mt-1">
                            <h1 className="company-font text-white transition-all duration-700 ease-in-out font-semibold lg:font-bold">
                                Premier Steels
                            </h1>
                        </NavLink>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:flex space-x-4 justify-center items-center uppercase">
                        {navLists.map((item, index) => (
                            <React.Fragment key={item.order}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `hover:text-selRed transition duration-300 px-3 py-2 rounded-md text-base ${isActive ? 'text-selRed font-bold' : 'text-white '}
          }`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                                {index < navLists.length - 1 && (
                                    <div className="h-[20px] w-[1px] bg-borderColor ml-4"></div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>


                    {/* Quote Button (Desktop Only) */}
                    <button className="request-nav-button desktop px-10 py-2"
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
                        <span className="text">Get Quote</span>
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

                    {/* <button
                        className="quote-btn px-4 py-1 rounded-full text-sm md:text-lg hidden lg:block"
                        onClick={() => setIsEnquiryModalOpen(true)}
                    >
                        Get Quote
                    </button> */}

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-white p-2 rounded-md focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            {isMobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`rounded-b-lg absolute top-full left-0 w-full transition-all duration-1000 ease-in-out transform ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
                    } overflow-hidden ${isScrolled ? 'bg-selBlack' : 'bg-red-950/30 backdrop-blur-3xl'} lg:hidden uppercase`}
                id="mobile-menu"
            >
                <div className="px-2 pb-3 flex flex-col justify-center items-start">
                    {navLists.map((item) => (
                        <NavLink
                            key={item.order}
                            to={item.path}
                            className={({ isActive }) =>
                                `block px-3 py-2 rounded-md text-sm ${isActive ? 'text-white font-extrabold' : 'text-white font-extralight '}
                }`
                            }
                            onClick={() => setMobileMenuOpen(false)} // Close menu on nav link click
                        >
                            {item.name}
                        </NavLink>
                    ))}


                    <button className="ml-3 request-nav-button animate-pulse mobile px-7 py-1"
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
                        <span className="text">Get Quote</span>
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
            </div>

        </nav>
    );
};

export default Navbar;
