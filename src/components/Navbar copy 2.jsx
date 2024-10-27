import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import companyLogo from '../assets/images/company_logo_bg.png'; // Update the path to your image
import '../assets/css/hamburger.css';
import { navLists } from '../utils/constants';

const Navbar = ({ setIsEnquiryModalOpen }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Toggle for mobile menu
    const navRef = useRef();
    const menuRef = useRef();

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
            gsap.to(navRef.current, { y: '-100%', duration: 0.5, ease: 'power2.out' });
        } else {
            gsap.to(navRef.current, { y: '0%', duration: 0.5, ease: 'power2.out' });
        }
        setLastScrollY(currentScrollY);
        setIsScrolled(currentScrollY > 50);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            gsap.to(menuRef.current, { y: '0%', duration: 0.5, ease: 'power2.out' });
        } else {
            gsap.to(menuRef.current, { y: '-100%', duration: 0.5, ease: 'power2.out' });
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <nav
            ref={navRef}
            className={`fixed top-0 left-0 flex flex-col justify-center w-screen z-50 lg:h-24 overflow-hidden bg-green-body/50 ${isScrolled ? 'bg-selBlack' : ''} transition-colors duration-1000`}
        >
            <div
                className={`w-full flex justify-between items-center max-w-screen-2xl px-4 ${isScrolled ? 'py-3 lg:py-4' : 'py-4 lg:py-7'} transition-all duration-700 ease-in-out`}
            >
                {/* Logo Section */}
                <div className="flex items-center gap-1 text-center justify-center ">
                    <NavLink to={'/'}>
                        <div style={{ borderRadius: "50%" }} className='bg-selRed-400 overflow-hidden p-1 lg:p-2'>
                            <img src={companyLogo} alt="Company Logo" className="w-5 h-5 lg:w-10 lg:h-7 transition-all duration-700 ease-in-out" />
                        </div>
                    </NavLink>
                    <NavLink to={'/'} className="flex items-center justify-center text-center mt-1">
                        <h1 className="company-font text-white transition-all duration-700 ease-in-out font-semibold lg:font-bold">
                            Premier Steels
                        </h1>
                    </NavLink>
                </div>

                {/* Desktop Nav Links */}
                <div className="hidden lg:flex px-5 py-2">
                    <ul className="flex w-full">
                        {navLists.map((item, index) => (
                            <li key={index} className="flex-grow flex items-center justify-center uppercase">
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) => `hover:text-selRed transition duration-300 px-6 py-1 rounded block text-center ${isActive ? 'text-selRed font-bold' : 'text-white '}`}
                                >
                                    {item.name}
                                </NavLink>
                                {index < navLists.length - 1 && (
                                    <div className="h-[20px] w-[1px] bg-borderColor ml-4"></div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* "Get Quote" Button for Desktop */}
                <button className="quote-btn px-4 py-1 rounded-full text-sm md:text-lg hidden lg:block"
                    onClick={() => setIsEnquiryModalOpen(true)}
                >
                    Get Quote
                </button>

                {/* Hamburger Icon for Mobile */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-white text-2xl">
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>



            <div className={`bg-green sm-navbar w-full ${isMenuOpen ? 'block' : 'hidden'}`}
            >
                <ul className={`items-center justify w-full md:flex 
        md:w-auto md:order-1 gap-3`} id="navbar-search">
                    <div className="relative mt-3 md:hidden">
                        <div className='flex'>
                            <ul className=" p-4 font-bold  uppercase h-full flex flex-col justify-center items-center gap-7 w-full text-white">
                                {navLists.map((item, index) => (
                                    <li key={index} className="uppercase">
                                        <NavLink
                                            to={item.path}
                                            onClick={toggleMenu}
                                            className={({ isActive }) => `hover:text-selRed transition duration-300 ${isActive ? 'text-selRed font-bold' : 'text-white'}`}
                                        >
                                            {item.name}
                                        </NavLink>
                                    </li>
                                ))}
                                <li>

                                    <button className="quote-btn px-6 py-2 rounded-full text-sm animate-pulse"
                                        onClick={() => {
                                            setIsEnquiryModalOpen(true);
                                            toggleMenu();
                                        }}
                                    >
                                        Get Quote
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                </ul>
            </div>

            {/* For smaller screens ends */}


        </nav>
    );
};

export default Navbar;
