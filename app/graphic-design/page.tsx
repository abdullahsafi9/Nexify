'use client'
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ThreeDCardExample } from "../snippets/3d-card-snippet";
import { EvervaultCardSnippet } from "../snippets/evervault-card-snippet";
import Link from "next/link";
import Navbar from "@/components/navbar";
const GraphicDesign = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
        const toggleDropdown = () => {
          setDropdownVisible(!isDropdownVisible);
        };
        const closeDropdown = () => {
          setDropdownVisible(false);
        };
      
         const websiteDesignRef = useRef<HTMLDivElement>(null);
        const graphicDesignRef = useRef<HTMLDivElement>(null);
        const shopifyStoresRef = useRef<HTMLDivElement>(null);
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
      
        const scrollToShopifyStores = () => {
          shopifyStoresRef.current?.scrollIntoView({ behavior: "smooth" });
        };
      
        const scrollToBrands = () => {
          brandsRef.current?.scrollIntoView({ behavior: "smooth" });
        };
      
        
        // Function to scroll to Services section
        const scrollToServices = () => {
          servicesRef.current?.scrollIntoView({ behavior: "smooth" });
        };
    return ( <div className=" flex flex-col  w-full  

     overflow-clip inset-0 -z-10 
  bg-black bg-[size:14px_24px]" >
    <Navbar
       scrollToWebsiteDesign={scrollToWebsiteDesign}
        scrollToGraphicDesign={scrollToGraphicDesign}
        scrollToShopifyStores={scrollToShopifyStores}
        scrollToBrands={scrollToBrands}
        scrollToServices={scrollToServices}
        />
       <div className=" p-4   mx-auto relative z-10  w-full pt-20 md:pt-32">
      <div className="text-4xl md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
        Graphic Design <br />
      </div>

      <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto">
        We create stunning visuals for your brand. From logos to social media
        posts, we&apos;ve got you covered.
      </p>
      <div className="items-center md:flex justify-center md:mx-auto md:space-x-10">
      <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="px-10 md:px-0"
          >
           <ThreeDCardExample />
            </motion.div>

            <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="px-10 md:px-0"
          >
           <EvervaultCardSnippet />
            </motion.div>

      </div>
 
        </div>
    </div>  );
}
 
export default GraphicDesign;