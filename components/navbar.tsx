"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import DropDownMenu from "./drop-down-menu";

interface NavbarProps {
  scrollToWebsiteDesign: () => void;
  scrollToGraphicDesign: () => void;
  scrollToWebsites: () => void;
  scrollToBrands: () => void;
  scrollToServices: () => void; // Define scrollToServices function
}

const Navbar = ({
  scrollToWebsiteDesign,
  scrollToGraphicDesign,
  scrollToWebsites,
  scrollToBrands,
  scrollToServices, // Add scrollToServices to props
}: NavbarProps) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const closeDropDown = () => {
    setIsDropDownVisible(false);
  };

  return (
    <div>
      <div className="p-6 md:p-10 xl:w-4/5 2xl:w-[68%] rounded-[6px] h-[10px] mt-[15px] bg-gradient-to-b from-neutral-50
              to bg-neutral-400 bg-opacity-50 md:mx-auto 
      transform flex sticky items-center justify-between z-50
      cursor-pointer  
            ">
        <div>
          <Link className=" bg-white cursor-pointer" href="/">
            <Image
              priority
              src="/logo/logo.png"
              alt="Logo"
              width={200}
              height={200}
              className=" md:w-[150px] md:h-[150px] "
            />
          </Link>
        </div>
        <div
          className="cursor-pointer hidden 
            md:flex space-x-10 items-center
             text-slate-300 text-center 
             bg-clip-text text-transparent 
             bg-gradient-to-b from-neutral-50
              to bg-neutral-400 bg-opacity-50"
        >
          <Link onClick={scrollToWebsites} className="hover:text-gray-50" href="/">
            Websites
          </Link>
          <Link onClick={scrollToWebsiteDesign} className="hover:text-gray-50" href="/">
            Website Design
          </Link>
          <Link onClick={scrollToGraphicDesign} className="hover:text-gray-50"  href="/">
            Graphic Design
          </Link>

         
          <Link onClick={scrollToBrands} className="hover:text-gray-50"  href="/">
            Brands
          </Link>

          <Link href="/pricing" className="hover:text-gray-50">
            Pricing
          </Link>
        </div>

        <div className="flex md:hidden">
          {isDropDownVisible ? (
            // display an x icon when the drop is visible
            <div
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            >
              <X />
              <DropDownMenu
                onClose={closeDropDown}
                scrollToServices={scrollToServices} // Pass scrollToServices
              />
            </div>
          ) : (
            <AlignJustify
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            />
          )}
        </div>

        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="
            inline-flex h-12 animate-shimmer items-center justify-center 
            rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
            bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors
             focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
              focus:ring-offset-slate-50

            "
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
