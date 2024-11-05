import React from 'react'
import { companyEmail, companyPhoneNo } from '../utils/constants';

import { MdEmail, MdLocationOn } from 'react-icons/md';
import { IoCall } from 'react-icons/io5';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { ImFacebook2 } from 'react-icons/im';
import { IoLogoYoutube } from 'react-icons/io';

const ContactsContentSection = () => {
    return (
        <>

            <div className="bg-white text-black flex flex-col justify-center md:h-auto py-10">
                <div className='h-auto md:h-full flex justify-center items-center p-4 md:p-0'>
                    <div className=' md:w-[80%] flex flex-col justify-center items-center text-center gap-8 md:gap-10'>
                        <div className='flex flex-col justify-center items-center gap-3'>
                            <h2 className='font-bold text-lg md:text-2xl uppercase'>Get in Touch</h2>
                            {/* <div className="h-[3px] md:h-[10px] w-full bg-selRed mt-[-2px]"></div> */}
                            <div className="space-y-1 text-sm md:text-base">
                                <p className='hidden md:block'>Reach out to us for any queries regarding our products and services.</p>
                                <p className='hidden md:block'>We are here to help and guide you through our offerings.</p>
                                <p className='block md:hidden'>Reach out to us for any queries regarding our products and services. We are here to help and guide you through our offerings.</p>
                            </div>
                        </div>
                        <div className="grid gap-4 md:gap-6 md:grid-cols-3 w-full px-5 md:px-0">
                            <div className="contact-card order-2 md:order-1 p-6 bg-selRed text-white shadow-lg rounded-lg flex flex-col items-center text-center transition-all transform md:hover:scale-105 hover:shadow-xl">
                                <ContactCard
                                    icon={<IoCall />}
                                    title="Call Us"
                                    text={`+91 ${companyPhoneNo}`}
                                    onClick={() => window.location.href = `https://wa.me/91${companyPhoneNo}`}
                                />
                            </div>
                            <div className="contact-card order-1 md:order-2 p-6 md:p-8 bg-selRed text-white shadow-lg rounded-lg flex flex-col items-center text-center md:transform md:scale-105 transition-all md:md:hover:scale-110 hover:shadow-xl">
                                <ContactCard
                                    icon={<MdLocationOn />}
                                    title="Address"
                                    text={`Premier Steels\nStock Yard, Pullepady Road\nErnakulam, PIN: 628017`}
                                    onClick={() => window.open("https://maps.app.goo.gl/NsLitg5Y48vRQHf46", "_blank")}
                                />
                            </div>
                            <div className="contact-card order-3 md:order-3 p-6 bg-selRed text-white shadow-lg rounded-lg flex flex-col items-center text-center transition-all transform md:hover:scale-105 hover:shadow-xl">
                                <ContactCard
                                    icon={<MdEmail />}
                                    title="Email Us"
                                    text={companyEmail}
                                    onClick={() => window.location.href = `mailto:${companyEmail}`}
                                />
                            </div>
                        </div>


                    </div>
                </div>

            </div>

            <div className="bg-selWhite text-black py-8 md:py-10">
                <div className="flex flex-col justify-center items-center px-4 text-center gap-2 md:gap-3">
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="font-bold text-xl md:text-3xl uppercase text-selRed">Send us an email</h2>
                    </div>

                    <div className="text-xs md:text-base">
                        <p>We're here to answer any questions and provide support.</p>
                        <p>Feel free to leave us a message, and we'll get back to you promptly.</p>
                    </div>

                    <form className="flex flex-col space-y-4 w-full max-w-7xl mt-3 md:mt-5">
                        {/* Name Field */}
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="p-3 text-black focus:outline-none w-full rounded-md placeholder:text-xs md:placeholder:text-base"
                        />

                        {/* Email Field */}
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="p-3 text-black focus:outline-none w-full rounded-md placeholder:text-xs md:placeholder:text-base"
                        />

                        {/* Phone Number Field */}
                        <input
                            type="tel"
                            placeholder="Your Phone Number"
                            className="p-3 text-black focus:outline-none w-full rounded-md placeholder:text-xs md:placeholder:text-base"
                        />

                        {/* Message Field */}
                        <textarea
                            placeholder="Your Message"
                            className="p-3 text-black focus:outline-none w-full rounded-md placeholder:text-xs md:placeholder:text-base"
                            rows="4"
                        />

                        {/* Submit Button */}
                        <div>
                            <button className='bg-selRed px-16 py-2 text-white rounded-md'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>



            <div className='h-96 md:h-96'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.4082834858555!2d76.28874327503091!3d9.983093090121452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d48f57a27df%3A0xbd8601238c88e7ce!2sPremier%20Steels!5e0!3m2!1sen!2sin!4v1729509089342!5m2!1sen!2sin"
                    width="100%"
                    className="h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Google Map Location"
                ></iframe>
            </div>
        </>
    )
}

const ContactCard = ({ icon, title, text, onClick }) => (
    <button
        className="flex flex-col items-center text-center gap-3 md:gap-5 md:p-4 w-full"
        onClick={onClick}
    >
        {/* Icon with circular border, centered */}
        <div className="flex items-center justify-center w-7 md:w-12 h-7 md:h-12 rounded-full border-2 ">
            {icon}
        </div>

        {/* Title and Text centered */}
        <div>
            <p className="text-xs md:text-base font-bold uppercase whitespace-pre">{text}</p>
        </div>
    </button>
);


const SocialLink = ({ href, icon }) => (
    <a className="flex justify-center items-center text-3xl md:text-5xl" href={href} target="_blank" rel="noopener noreferrer">
        {icon}
    </a>
);


export default ContactsContentSection