import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { NavLink } from 'react-router-dom';
import companyLogo from '../assets/images/company_logo.jpg'; // Update the path to your image
import '../assets/css/hamburger.css'

const moreList = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Blog/News', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: 'About', path: '/about' },
];

const Navbar = () => {
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
        <nav className={` fixed top-0 left-0 flex justify-center w-screen z-50 overflow-hidden bg-green-body/50`}>
            <div
                className={`w-full flex justify-between items-center max-w-7xl px-4 ${isScrolled ? 'py-2 md:py-4' : 'py-4 md:py-7'
                    } transition-all duration-700 ease-in-out`}
            >
                {/* Logo Section */}
                <div className="flex items-center gap-1 text-center justify-center ">
                    <NavLink to={'/'} className=''>
                    <div className='bg-red-400  rounded-full overflow-hidden'>
                        <img src={companyLogo} alt="Company Logo" className={`${isScrolled ? 'w-3 h-3 md:w-6 md:h-6' : 'w-6 h-6 md:w-10 md:h-10'} transition-all duration-700 ease-in-out`} />
                    </div>
                    </NavLink>
                    <NavLink to={'/'} className="flex items-center justify-center text-center mt-1">
                        <h1 className={`text-white ${isScrolled ? 'text-xs md:text-base' : 'text-sm md:text-2xl'} transition-all duration-700 ease-in-out font-semibold md:font-bold`}
                            style={{ fontFamily: "'Babylon', sans-serif" }}
                        >
                            Premier Steels
                        </h1>
                    </NavLink>
                </div>

                {/* Brand Name */}
                {/* <NavLink to={'/'} className="hidden md:flex items-center">
                    <h1
                        style={{ fontFamily: "'Babylon', sans-serif" }}
                        className={`text-white ${isScrolled ? 'text-xs md:text-xl' : 'text-sm md:text-2xl'} transition-all duration-700 ease-in-out font-semibold md:font-bold`}
                    >
                        Premier Steels
                    </h1>
                </NavLink> */}

                {/* Hamburger Menu */}
                <div className="flex justify-center items-center gap-1 cursor-pointer z-50 text-center" onClick={() => setIsOpen(!isOpen)}>
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
                <div className="text-red-500 hover:text-[#fff] font-normal flex flex-col justify-center items-center h-full space-y-4 mr-10 md:">
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
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
