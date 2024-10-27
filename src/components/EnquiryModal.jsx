import React, { useRef, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { IoMdCloseCircle } from 'react-icons/io';
import { POST_ENQUIRY_FORM } from '../utils/urls';

const EnquiryModal = ({ isEnquiryModalOpen, setIsEnquiryModalOpen }) => {
    const enqModalRef = useRef();

    // State to handle form inputs and errors
    const [formValues, setFormValues] = useState({
        name: '',
        phone_number: '',
        message: '',
        looking_for: ['Other'], // "Other" is selected by default
    });


    const [errors, setErrors] = useState({});

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            // Add the selected option to the array
            setFormValues({
                ...formValues,
                looking_for: [...formValues.looking_for, value],
            });
        } else {
            // Remove the unselected option from the array
            setFormValues({
                ...formValues,
                looking_for: formValues.looking_for.filter((option) => option !== value),
            });
        }
    };


    // Handle form input change
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

    // Validate the form
    const validateForm = () => {
        const newErrors = {};
        if (!formValues.name) newErrors.name = 'Name is required';
        if (!formValues.phone_number) newErrors.phone_number = 'Phone number is required';
        if (formValues.looking_for.length === 0) newErrors.looking_for = 'Please select at least one material';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                await toast.promise(
                    axios.post(POST_ENQUIRY_FORM, new URLSearchParams({
                        ...formValues,
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
        <>
            {isEnquiryModalOpen && (
                <div className="fixed inset-0 z-50">
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity backdrop-blur-sm"
                        onClick={() => setIsEnquiryModalOpen(false)} // Close modal on backdrop click
                    ></div>

                    {/* Modal Content */}
                    <div
                        className="fixed inset-y-0 right-0 z-10 w-full lg:w-1/2 h-full overflow-y-auto flex justify-end sm:p-0"
                        onClick={() => setIsEnquiryModalOpen(false)} // Close modal if outer div clicked
                    >
                        <div className="justify-center mr-5 hidden md:flex">
                            <div className="h-full flex justify-center items-center">
                                <button
                                    onClick={() => setIsEnquiryModalOpen(false)}
                                    className="enquiry-modal-close-button text-borderColor h-fit text-center md:text-5xl lg:text-7xl"
                                >
                                    <IoMdCloseCircle />
                                </button>
                            </div>
                        </div>

                        <div
                            className="relative w-full md:w-1/2 h-full transform bg-white/50 text-left shadow-xl transition-all"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
                            role="dialog"
                        >
                            {/* Modal Header */}


                            <div className="enquiry-modal-content p-6 ">
                                <div className='w-full flex justify-end'>
                                    {/* Close Button for Mobile */}
                                    <button
                                        onClick={() => setIsEnquiryModalOpen(false)}
                                        className="flex md:hidden enquiry-modal-close-button text-zinc text-2xl"
                                    >
                                        <IoMdCloseCircle className="" />
                                    </button>
                                </div>


                                {/* Enquiry Form */}
                                <h2 className="enquiry-modal-title text-base md:text-xl lg:text-2xl mb-4">Enquiry Form</h2>
                                <form onSubmit={handleSubmit} className="enquiry-form space-y-10 text-black">


                                    <div className="flex items-center justify-center">
                                    </div>


                                    <div className="enquiry-form-group">
                                        <div className="relative">
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                value={formValues.name}
                                                onChange={handleInputChange}
                                                className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-borderColor2 transition-colors focus:outline-none peer bg-inherit"
                                            />
                                            <label
                                                htmlFor="name"
                                                className={`absolute left-0 ${formValues.name ? '-top-4 text-xs' : 'top-1'} cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-green-body`}
                                            ><strong>*</strong>Name</label>
                                        </div>
                                        {errors.name && <p className="mt-1 ml-1 text-yellow-500 text-sm">{errors.name}</p>}

                                    </div>
                                    <div className="enquiry-form-group">
                                        <div className="relative">
                                            <input
                                                id="phone_number"
                                                name="phone_number"
                                                type="text"
                                                value={formValues.phone_number}
                                                onChange={handleInputChange}
                                                className="border-b font-josefin font-semibold border-gray-300 py-1 focus:border-b-2 focus:border-borderColor2 transition-colors focus:outline-none peer bg-inherit"
                                            />
                                            <label
                                                htmlFor="phone_number"
                                                className={`absolute left-0 ${formValues.phone_number ? '-top-4 text-xs' : 'top-1'} cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-green-body`}
                                            >phone_number</label>
                                        </div>
                                        {errors.phone_number && <p className="mt-1 ml-1 text-yellow-500 text-sm">{errors.phone_number}</p>}
                                    </div>

                                    <div className="enquiry-form-group">
                                        <p className="mb-2">Looking for:</p>

                                        <div className="space-y-2">
                                            <label className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    value="Stainless Steel"
                                                    checked={formValues.looking_for.includes('Stainless Steel')}
                                                    onChange={handleCheckboxChange}
                                                    className="mr-2"
                                                />
                                                Stainless Steel
                                            </label>

                                            <label className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    value="Mild Steel"
                                                    checked={formValues.looking_for.includes('Mild Steel')}
                                                    onChange={handleCheckboxChange}
                                                    className="mr-2"
                                                />
                                                Mild Steel
                                            </label>

                                            <label className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    value="Steel Wires"
                                                    checked={formValues.looking_for.includes('Steel Wires')}
                                                    onChange={handleCheckboxChange}
                                                    className="mr-2"
                                                />
                                                Steel Wires
                                            </label>

                                            <label className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    value="Sheets & Coils"
                                                    checked={formValues.looking_for.includes('Sheets & Coils')}
                                                    onChange={handleCheckboxChange}
                                                    className="mr-2"
                                                />
                                                Sheets & Coils
                                            </label>

                                            <label className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    value="Other"
                                                    checked={formValues.looking_for.includes('Other')}
                                                    onChange={handleCheckboxChange}
                                                    className="mr-2"
                                                />
                                                Other
                                            </label>
                                        </div>

                                        {errors.looking_for && <p className="mt-1 ml-1 text-yellow-500 text-sm">{errors.looking_for}</p>}
                                    </div>



                                    <div className="enquiry-form-group">
                                        <div className="relative">
                                            <textarea
                                                name="message"
                                                value={formValues.message}
                                                onChange={handleInputChange}
                                                className="font-josefin font-semibold border-b border-gray-300 py-1 focus:border-b-2 focus:border-borderColor2 transition-colors focus:outline-none peer bg-inherit w-full"
                                                rows="4"
                                            />

                                            <label
                                                htmlFor="message"
                                                className={`absolute left-0 ${formValues.message ? '-top-4 text-xs' : 'top-1'} cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-green-body`}
                                            >message</label>
                                        </div>
                                        {errors.message && <p className="mt-1 ml-1 text-yellow-500 text-sm">{errors.message}</p>}
                                    </div>

                                    <button type='submit'
                                        className="w-full px-4 py-2 md:px-6 md:py-3 bg-green-body/90 rounded-md text-white font-semibold relative transition-all duration-700 hover:scale-105"
                                    >
                                        APPLY
                                    </button>
                                </form>
                            </div>


                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default EnquiryModal;
