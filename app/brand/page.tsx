"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import Link from "next/link";
import { Lora } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";

const font = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

const logos = [
  {
    image: "/logo/logo1.png",
  },
  {
    image: "/logo/logo7.png",
  },
  {
    image: "/logo/logo2.png",
  },
  {
    image: "/logo/logo6.png",
  },
  {
    image: "/logo/logo5.png",
  },
  {
    image: "/logo/logo3.png",
  },
    {
    image: "/logo/logo4.png",
  },
    {
    image: "/logo/logo8.png",
  },
    {
    image: "/logo/logo9.png",
  },

];

const Brands = () => {
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
  
  return (
    <div className="
    
    flex flex-col  w-full  

     overflow-clip inset-0 -z-10 
  bg-black bg-[size:14px_24px] 
    
    ">
      <Navbar
       scrollToWebsiteDesign={scrollToWebsiteDesign}
        scrollToGraphicDesign={scrollToGraphicDesign}
        scrollToShopifyStores={scrollToShopifyStores}
        scrollToBrands={scrollToBrands}
        scrollToServices={scrollToServices}
        />
      <div className=" p-4   mx-auto relative z-10 bg-black  w-full pt-20 md:pt-32">
        <div className="text-4xl md:pb-8 md:text-7xl text-center 
        bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
          The best brands <br /> choose us
        </div>

        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto">
          From small businesses to large corporations, we have helped many
          brands elevate their business.
        </p>

        <div className="grid grid-cols-3  items-center justify-center  mx-auto  cursor-pointer">
          {logos.map((logo, i) => (
            <div key={i} className="p-4 md:p-20">
              <Image
                priority
                src={logo.image}
                width={1500}
                height={1500}
                alt="logo"
                className="w-full h-auto max-w-full rounded-lg"
              />
            </div>
          ))}
        </div>



      
      </div>
    </div>
  );
};

export default Brands;
