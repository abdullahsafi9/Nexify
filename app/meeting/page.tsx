"use client";

import { useState, useRef } from "react";
import Calendly from "./calendly";
import Navbar from "@/components/navbar";
import { PiCheckCircle } from "react-icons/pi";
import { motion } from "framer-motion";

const checkItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};



const Meeting = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
            const toggleDropdown = () => {
              setDropdownVisible(!isDropdownVisible);
            };
            const closeDropdown = () => {
              setDropdownVisible(false);
            };
          
             const websiteDesignRef = useRef<HTMLDivElement>(null);
            const graphicDesignRef = useRef<HTMLDivElement>(null);
            const websitesRef = useRef<HTMLDivElement>(null);
            const brandsRef = useRef<HTMLDivElement>(null);
            const servicesRef = useRef<HTMLDivElement>(null);
          
            const scrollToWebsiteDesign = () => {
              websiteDesignRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              });
            };
          
            const scrollToGraphicDesign = () => {
              graphicDesignRef.current?.scrollIntoView({ behavior: "smooth" });
            };
          
            const scrollToWebsites = () => {
              websitesRef.current?.scrollIntoView({ behavior: "smooth" });
            };
          
            const scrollToBrands = () => {
              brandsRef.current?.scrollIntoView({ behavior: "smooth" });
            };
          
            
            // Function to scroll to Services section
            const scrollToServices = () => {
              servicesRef.current?.scrollIntoView({ behavior: "smooth" });
            };


  return (
    <div className="
    
    flex flex-col  w-full  

     overflow-clip inset-0 -z-10 
  bg-black bg-[size:14px_24px] 
    
    ">
      <Navbar 
      scrollToWebsiteDesign={scrollToWebsiteDesign}
        scrollToGraphicDesign={scrollToGraphicDesign}
        scrollToWebsites={scrollToWebsites}
        scrollToBrands={scrollToBrands}
        scrollToServices={scrollToServices}
        />
      <div className="md:px-0 px-6 xl:w-4/5 2xl:w-[68%] justify-between md:mt-14 md:flex mx-auto  ">
        <div className="md:w-2/5">
          <h1 className="text-4xl text-white font-semibold pt-10   ">Let&apos;s Meet</h1>
          <p className="text-lg text-gray-500 py-4">
            We are always excited to meet new people and discuss new projects.
            Please feel free to book a meeting with us.
          </p>

          {[
                {
                  title: "Development + Design",
                  description:
                    "Turn your ideas into reality with our development and design services.",
                },

                {
                  title: "Free Consultation",
                  description:
                    "Get expert advice on how to improve your business and increase your online presence.",
                },
                {
                  title: "Technical Support",
                  description:
                    "Get technical support for your website or application.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={checkItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 1.8 }}
                  className="flex gap-x-4 py-4"
                >
                  <PiCheckCircle className=" rounded-md text-[#3d80d7] text-2xl flex-shrink-0" />
                  <ul>
                    <h3 className="text-lg font-bold text-gray-400">
                      {item.title}
                    </h3>
                    <div className="text-gray-600">{item.description}</div>
                  </ul>
                </motion.div>
              ))}
        </div>

    <div className="md:w-1/2">
      <Calendly />
      </div>
      </div>
    </div>
  );
};

export default Meeting;
