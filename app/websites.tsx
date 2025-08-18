'use client'

import Image from "next/image"
import Link from "next/link";
import swot from "../public/images/swot.jpg" 
import shelai from "../public/images/shelai.png" 
import smf from "../public/images/smf.jpeg" 
import brighton from "../public/images/Brighton.png" 
import db from "../public/images/e-commerce dashboard.png" 
import tour from "../public/images/madventure.png"


const Websites = () => {
    return (   
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
  
    </div>
     <Link
          href={"/website"}
          className="cursor-pointer md:mt-[40px] flex items-center justify-center border rounded-full w-48 p-2  mx-auto my-6 text-white "
        >
          Learn More
        </Link>
    </div> );
}
 
export default Websites;