import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { toast } from 'react-toastify'; // Ensure you have react-toastify installed
import axios from 'axios'; // Ensure you have axios installed
import { companyLogo, productsList } from '../utils/constants';
import { POST_ENQUIRY_FORM } from '../utils/urls';
import { BsCheckSquare, BsSquare } from 'react-icons/bs';

const EnquiryModal = ({ isEnquiryModalOpen, setIsEnquiryModalOpen }) => {
    const modalRef = useRef();
    const [isVisible, setIsVisible] = useState(false);
    const [formValues, setFormValues] = useState({
        name: '',
        phone_number: '',
        message: '',
        looking_for: ['Other'], // "Other" is selected by default
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (isEnquiryModalOpen) {
            setIsVisible(true);
            gsap.fromTo(
                modalRef.current,
                { opacity: 0, scale: 0.2 },
                { opacity: 1, scale: 1, duration: 1.5, ease: 'power3.out' }
            );
        } else if (isVisible) {
            gsap.to(modalRef.current, {
                opacity: 0,
                scale: 0.9,
                duration: 0.5,
                ease: 'power3.in',
                onComplete: () => setIsVisible(false),
            });
        }
    }, [isEnquiryModalOpen, isVisible]);

    if (!isEnquiryModalOpen && !isVisible) return null;

    const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setIsEnquiryModalOpen(false);
        }
    };

    const handleProductChange = (product) => {
        setFormValues((prevValues) => {
            const lookingFor = prevValues.looking_for.includes(product)
                ? prevValues.looking_for.filter((item) => item !== product) // Deselect
                : [...prevValues.looking_for, product]; // Select

            return {
                ...prevValues,
                looking_for: lookingFor,
            };
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });

        if (errors[name]) {
            const newErrors = { ...errors };
            delete newErrors[name];
            setErrors(newErrors);
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formValues.name) newErrors.name = 'Name is required';

        // Updated regex to allow for 10, 11, or 12 digit numbers
        if (!formValues.phone_number || !/^\d{10,12}$/.test(formValues.phone_number)) {
            newErrors.phone_number = 'A valid phone number with 10 to 12 digits is required';
        }

        if (formValues.looking_for.length === 0) newErrors.looking_for = 'Please select at least one product';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const countryCode = '91'; // Default country code
                const fullPhoneNumber = `${countryCode}${formValues.phone_number}`;
                await toast.promise(
                    axios.post(POST_ENQUIRY_FORM, new URLSearchParams({
                        ...formValues,
                        phone_number: fullPhoneNumber, // Concatenate country code with phone number
                        looking_for: formValues.looking_for.join(','), // Join multiple values into a comma-separated string
                    }).toString()),
                    {
                        pending: 'Submitting...',
                        success: 'Enquiry submitted successfully!',
                        error: 'Error submitting form',
                    }
                );
                setIsEnquiryModalOpen(false);
            } catch (error) {
                console.error("Form submission error:", error);
            }
        } else {
            toast.error("Please fill out all required fields.");
        }
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-selBlack bg-opacity-50 z-50 backdrop-blur-sm px-4"
            onClick={handleClickOutside}
        >
            <div
                ref={modalRef}
                className="relative w-full max-w-md md:max-w-lg lg:max-w-xl p-4 md:p-6 lg:p-8 bg-gradient-to-br from-[#380101] to-[#000000] via-[#000000] rounded-3xl shadow-lg overflow-hidden"
            >
                <button
                    onClick={() => setIsEnquiryModalOpen(false)}
                    className="absolute top-4 right-4 text-white text-xl md:text-2xl font-bold"
                >
                    &times;
                </button>
                {/* Logo and Company Name */}
                <div className="md:px-5 flex items-center gap-1 text-center justify-start">
                    <div >
                        <div style={{ borderRadius: "50%" }} className="">
                            <img src={companyLogo} alt="Company Logo" className="w-2 h-2 lg:w-5 lg:h-3 transition-all duration-700 ease-in-out" />
                        </div>
                    </div>
                    <div className="flex items-center justify-center text-center mt-1 text-sm">
                        <h1 className="company-font-only text-white transition-all duration-700 ease-in-out font-semibold lg:font-bold">
                            Premier Steels
                        </h1>
                    </div>
                </div>

                <div className="md:px-5 max-h-[70vh] overflow-y-auto uppercase">
                        <h2 className="text-selWhite text-sm md:text-3xl lg:text-xl font-light mt-2">Send your quote</h2>
                    <form className="space-y-4 text-xs" onSubmit={handleSubmit}>

                        {/* Input Fields */}
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                className="h-7 w-full p-2 md:p-3 rounded-sm bg-transparent backdrop-blur-sm border border-borderColor text-selWhite placeholder-gray-400 focus:outline-none"
                                onChange={handleInputChange}
                            />
                            {errors.name && <p className="text-red-500">{errors.name}</p>}
                        </div>

                        {/* Phone Number Fields */}
                        <div className="">
                            <div className='flex w-full  space-x-2'>

                                <input
                                    type="text"
                                    name="phone_number"
                                    placeholder="Phone Number"
                                    className="h-7 flex-1 p-2 md:p-3 rounded-sm bg-transparent backdrop-blur-sm border border-borderColor text-selWhite placeholder-gray-400 focus:outline-none"
                                    onChange={handleInputChange}
                                />
                            </div>
                            {errors.phone_number && <p className="text-red-500">{errors.phone_number}</p>}
                        </div>

                        {/* Product Selection */}
                        <div className='text-xs'>
                            <h3 className="text-borderColor text-sm mb-2">Looking for:</h3>
                            <div className="flex flex-wrap space-y-2 ml-5 md:ml-10">
                                {productsList.map((product) => (
                                    <label key={product.title} className="flex items-center text-selWhite w-1/2">
                                        <input
                                            type="checkbox"
                                            checked={formValues.looking_for.includes(product.title)}
                                            onChange={() => handleProductChange(product.title)}
                                            className="hidden" // Hide the default checkbox
                                        />
                                        <div className="flex items-center justify-center rounded-md mr-2 cursor-pointer">
                                            {formValues.looking_for.includes(product.title) ? (
                                                <BsCheckSquare className="text-selBlack text-xs bg-gradient-to-r from-[#ffe5b2] to-[#9c8611]" /> // Checked state icon
                                            ) : (
                                                <BsSquare className="text-borderColor text-xs" /> // Unchecked state icon
                                            )}
                                        </div>
                                        <span className={formValues.looking_for.includes(product.title) ? "font-bold" : "text-borderColor2"}>
                                            {product.title}
                                        </span>
                                    </label>
                                ))}
                                <label className="flex items-center text-selWhite w-1/2">
                                    <input
                                        type="checkbox"
                                        checked={formValues.looking_for.includes("Other")}
                                        onChange={() => handleProductChange("Other")}
                                        className="hidden" // Hide the default checkbox
                                    />
                                    <div className="flex items-center justify-center rounded-md mr-2 cursor-pointer">
                                        {formValues.looking_for.includes("Other") ? (
                                            <BsCheckSquare className="text-selBlack text-xs bg-gradient-to-r from-[#ffe5b2] to-[#9c8611]" /> // Checked state icon
                                        ) : (
                                            <BsSquare className="text-borderColor text-xs" /> // Unchecked state icon
                                        )}
                                    </div>
                                    <span className={formValues.looking_for.includes("Other") ? "font-bold" : "text-borderColor2"}>
                                        Other
                                    </span>
                                </label>
                            </div>


                            {errors.looking_for && <p className="text-red-500">{errors.looking_for}</p>}
                        </div>

                        <div className="mb-6">
                            <textarea
                                name="message"
                                placeholder="Type your message here"
                                rows="3"
                                className=" w-full p-2 md:p-3 rounded-sm bg-transparent backdrop-blur-sm border border-borderColor text-selWhite placeholder-gray-400 focus:outline-none"
                                onChange={handleInputChange}
                            ></textarea>
                        <div className='flex justify-end'>
                            <button className='text-selBlack bg-gradient-to-r from-[#ffe5b2] to-[#9c8611] px-2 md:px-5 py-1 md:py-2 rounded-sm uppercase font-extrabold text-xs'>Submit Quote</button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EnquiryModal;
