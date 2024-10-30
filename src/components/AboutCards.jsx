import React, { useEffect } from "react";
import { gsap } from "gsap";
import { IoMdBusiness, IoMdPeople, IoMdTime } from "react-icons/io";

const cardData = [
    {
        title: "Mission",
        icon: <IoMdBusiness size={40} className="text-selRed" />,
        content: "It is the Mission of Premier steels to be a valuable partner with our customers, vendors, and employees. We believe honest communication, expertise in our industry, and prompt execution lead to strong, long-lasting relationships.",
    },
    {
        title: "Values",
        icon: <IoMdPeople size={40} className="text-selRed" />,
        content: "We are committed to providing a safe, healthy working environment, enabling our team to develop long-term, mutually beneficial business relationships.",
    },
    {
        title: "Partnership",
        icon: <IoMdPeople size={40} className="text-selRed" />,
        content: "Since our inception, we have been committed to a business philosophy termed 'Total Quality Partnering'. This commitment requires continuous interaction between the client and all key personnel involved in the execution and completion of every order.",
    },
    {
        title: "History",
        icon: <IoMdTime size={40} className="text-selRed" />,
        content: "Premier Steels, with over 40 years of expertise in the steel supply industry, has built a reputation for reliability and excellence.",
    },
];

const AboutCards = () => {
    useEffect(() => {
        gsap.fromTo(
            ".about-card",
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".about-card",
                    start: "top 90%",
                },
            }
        );
    }, []);

    return (
        <div className="flex flex-col items-center py-10 px-4 md:px-0 bg-gray-100">
         {/*  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">About Us</h2>*/}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full max-w-7xl">
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className="about-card p-6 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105 flex flex-col items-center text-center"
                    >
                        <div className="mb-4">{card.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                        <p className="text-sm md:text-base text-black">{card.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutCards;
