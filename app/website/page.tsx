'use client'
import { useState, useRef } from "react";
import Image from "next/image"
import Link from "next/link";
import Navbar from "@/components/navbar";
import swot from "../../public/images/swot.jpg" 
import shelai from "../../public/images/shelai.png" 
import smf from "../../public/images/smf.jpeg" 
import brighton from "../../public/images/Brighton.png" 
import db from "../../public/images/e-commerce dashboard.png" 
import tour from "../../public/images/madventure.png"
import startup from "../../public/images/startupmind.png"
import ecom from "../../public/images/e-comerce-website.png"
import bims from "../../public/images/bims.png"
import jb from "../../public/images/julybarta.png"
import cl from "../../public/images/cl.png"

const Websites = () => {
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
    <div className="text-white">
 <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
      <div className="text-4xl  md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
               Featured Websites <br /> for Clients
      </div>
      <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
      Developing websites that work for your business.
        </p>
        </div>

        <div className="">
    <div className="flex gap-4 ml-[30px]">
        <div>
            <Image
            width={535}
            height={550}
            priority
            className="h-auto max-w-full rounded-lg" src={smf} alt=""/>
        </div>
        <div>
            <Image
            width={300}
            height={300}
            priority
            className="h-auto max-w-full rounded-lg" src={shelai} alt=""/>
        </div>
         <div>
            <Image
            width={300}
            height={300}
            priority
            className="h-auto max-w-full rounded-lg" src={db} alt=""/>
        </div>
       
    </div>

    <div className="flex gap-4 mt-[20px] ml-[30px]">
     
     <div>
            <Image
            width={380}
            height={380}
            priority
            className="h-auto max-w-full rounded-lg" src={swot} alt=""/>
        </div>

     <div>
            <Image
            width={310}
            height={320}
            priority
            className="h-auto max-w-full rounded-lg" src={brighton} alt=""/>
        </div>


     <div>
            <Image
            width={450}
            height={320}
            priority
            className="h-auto max-w-full rounded-lg" src={tour} alt=""/>
        </div>

   </div>

   
    <div className="flex gap-4 mt-[20px] ml-[30px]">
     
     <div>
            <Image
            width={380}
            height={380}
            priority
            className="h-auto max-w-full rounded-lg" src={startup} alt=""/>
        </div>

     <div>
            <Image
            width={310}
            height={320}
            priority
            className="h-auto max-w-full rounded-lg" src={bims} alt=""/>
        </div>


     <div>
            <Image
            width={450}
            height={320}
            priority
            className="h-auto max-w-full rounded-lg" src={ecom} alt=""/>
        </div>

   </div>

       <div className="flex gap-4 mt-[20px] ml-[30px]">
     
     <div>
            <Image
            width={380}
            height={380}
            priority
            className="h-auto max-w-full rounded-lg" src={jb} alt=""/>
        </div>


  <div>
            <Image
            width={300}
            height={300}
            priority
            className="h-auto max-w-full rounded-lg" src={cl} alt=""/>
        </div>

   </div>
  
    </div>
    
    </div> 
     </div>);
}
 
export default Websites;