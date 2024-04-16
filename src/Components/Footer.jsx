import React, { useState } from "react";
import Twitter from '../assets/tw.png';
import Instagram from '../assets/li.png';
import Linkedin from '../assets/lin.png';
import Facebook from '../assets/fb.png';
import Logo from '../assets/logo.svg';




const Footer = () => {
 
  return (
    <div className="w-full bg-tertiary bg-primary lg:p-24 md:p-12 p-6 font4">
      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2  xl:grid-cols-6  lg:gap-16 md:gap-12 sm:gap-12  gap-10">
        <div className="col-span-2">
        <a href='#'>
        <img src={Logo} alt="logo" className="mb-4" />
      </a>
          <div className="flex flex-col gap-6 text-start">
            <p className="text-sm w-full xl:w-[80%] text-[#2E2E2E]">Explore Exciting Job Opportunities Worldwide
            </p>
            <div className="flex flex-row gap-4 ">
                <img src={Facebook} alt="fb" className="w-4 h-4" />
                <img src={Twitter} alt="fb" className="w-4 h-4" />
                <img src={Instagram} alt="fb" className="w-4 h-4 " />
                <img src={Linkedin} alt="fb" className="w-4 h-4" />
            </div>
          </div>
        </div>
      
        <div className="text-start flex flex-col ">
        <h3 className="text-lg font-bodyFont font-bold mb-6 text-[#2E2E2E]">CANDIDATES</h3>
          <ul className="flex flex-col gap-2">
            <li className="font-titleFont text-sm text-[#2E2E2E] hover:text-[#919EAB] hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              For Candidates
            </li>
            <li className="font-titleFont text-sm text-[#2E2E2E] hover:text-[#919EAB] hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Candidates Sign Up
            </li>
            <li className="font-titleFont text-sm text-[#2E2E2E] hover:text-[#919EAB] hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Candidates FAQ
            </li>
          
          </ul>
        </div>

        <div className="text-start flex flex-col ">
        <h3 className="text-lg font-bodyFont font-bold mb-6 text-[#2E2E2E]">EMPLOYERS</h3>
          <ul className="flex flex-col gap-2">
            <li className="font-titleFont text-sm text-[#2E2E2E] hover:text-[#919EAB] hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              For Employers
            </li>
            <li className="font-titleFont text-sm text-[#2E2E2E] hover:text-[#919EAB] hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
            Employers Sign Up
            </li>
            <li className="font-titleFont text-sm text-[#2E2E2E] hover:text-[#919EAB] hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
            Employers FAQ
            </li>
            <li className="font-titleFont text-sm text-[#2E2E2E] hover:text-[#919EAB] hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
            Startup Jobs
            </li>
          
          </ul>
        </div>

        <div className="text-start flex flex-col ">
        <h3 className="text-lg font-bodyFont font-bold mb-6 text-[#2E2E2E]">COMPANY</h3>
          <ul className="flex flex-col gap-2">
            <li className="font-titleFont text-sm text-[#2E2E2E] hover:text-[#919EAB] hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Careers
            </li>
            <li className="font-titleFont text-sm text-[#2E2E2E] hover:text-[#919EAB] hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Privacy Policy
            </li>
          
          </ul>
        </div>
        
      </div>
    </div>
  );
};


export default Footer;