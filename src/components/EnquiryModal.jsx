import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { toast } from 'react-toastify'; // Ensure you have react-toastify installed
import axios from 'axios'; // Ensure you have axios installed
import { productsList } from '../utils/constants';
import { POST_ENQUIRY_FORM } from '../utils/urls';

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
                className="relative w-full max-w-md md:max-w-lg lg:max-w-xl p-4 md:p-6 lg:p-8 bg-gradient-to-br from-[#380101] to-[#000000] via-[#000000] rounded-3xl shadow-lg pb-20 overflow-hidden"
            >
                <button
                    onClick={() => setIsEnquiryModalOpen(false)}
                    className="absolute top-4 right-4 text-white text-xl md:text-2xl font-bold"
                >
                    &times;
                </button>

                <div className="max-h-[70vh] overflow-y-auto">
                    <form className="space-y-4 md:px-10 md:pb-10" onSubmit={handleSubmit}>
                        <h2 className="text-selWhite text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Get Quotation</h2>

                        {/* Input Fields */}
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                className="w-full p-2 md:p-3 rounded-xl bg-selWhite text-selBlack placeholder-gray-400 focus:outline-none"
                                onChange={handleInputChange}
                            />
                            {errors.name && <p className="text-red-500">{errors.name}</p>}
                        </div>

                        {/* Phone Number Fields */}
                        <div className="">
                            <div className='flex w-full  space-x-2'>
                                <input
                                    type="text"
                                    name="country_code"
                                    value="+91"
                                    readOnly
                                    className="w-1/6 p-2 rounded-xl bg-selWhite text-gray focus:outline-none"
                                />
                                <input
                                    type="text"
                                    name="phone_number"
                                    placeholder="Phone Number"
                                    className="flex-1 p-2 md:p-3 rounded-xl bg-selWhite text-selBlack placeholder-gray-400 focus:outline-none"
                                    onChange={handleInputChange}
                                />
                            </div>
                            {errors.phone_number && <p className="text-red-500">{errors.phone_number}</p>}
                        </div>

                        {/* Product Selection */}
                        <div>
                            <h3 className="text-selWhite text-lg md:text-xl lg:text-2xl mb-2">Looking for:</h3>
                            <div className="flex flex-wrap space-y-2 ml-5 md:ml-10">
                                {productsList.map((product) => (
                                    <label key={product.title} className="flex items-center text-selWhite w-1/2">
                                        <input
                                            type="checkbox"
                                            checked={formValues.looking_for.includes(product.title)}
                                            onChange={() => handleProductChange(product.title)}
                                            className="hidden" // Hide the default checkbox
                                        />
                                        <div className="flex items-center justify-center h-4 w-4 border-2 border-gray-300 rounded-md mr-2 cursor-pointer">
                                            {formValues.looking_for.includes(product.title) && (
                                                <div className="bg-white rounded-md h-2 w-2"></div> // Inner dot for checked state
                                            )}
                                        </div>
                                        {product.title}
                                    </label>
                                ))}
                                <label className="flex items-center text-selWhite w-1/2">
                                    <input
                                        type="checkbox"
                                        checked={formValues.looking_for.includes("Other")}
                                        onChange={() => handleProductChange("Other")}
                                        className="hidden" // Hide the default checkbox
                                    />
                                    <div className="flex items-center justify-center h-4 w-4 border-2 border-gray-300 rounded-md mr-2 cursor-pointer">
                                        {formValues.looking_for.includes("Other") && (
                                            <div className="bg-white rounded-md h-2 w-2"></div> // Inner dot for checked state
                                        )}
                                    </div>
                                    Other
                                </label>
                            </div>
                            {errors.looking_for && <p className="text-red-500">{errors.looking_for}</p>}
                        </div>

                        <div className="mb-6">
                            <textarea
                                name="message"
                                placeholder="Type your message here"
                                rows="3"
                                className="w-full p-2 md:p-3 rounded-xl bg-selWhite text-selBlack placeholder-gray-400 focus:outline-none"
                                onChange={handleInputChange}
                            ></textarea>
                        </div>
                    </form>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-r from-[#ffe5b2] to-[#9c8611] text-selBlack font-extrabold transition duration-300 uppercase"
                    onClick={handleSubmit}
                >
                    Submit Enquiry
                </button>
            </div>
        </div>
    );
};

export default EnquiryModal;
