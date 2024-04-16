import React from 'react';
import ENG from "../assets/eng.png"
import PRO from "../assets/pro.png";
import SCI from "../assets/sci.png";
import DES from "../assets/des.png";
import MAR from "../assets/mar.png";
// import Adobe from "../assets/adobe.png";



const Frame = () => {
  return (
    <div className='lg:h-[90vh]  flex items-center justify-center lg:bg-cover lg:bg-center 
    lg:bg-no-repeat lg:p-24 md:p-12 p-6 lg:py-0 overflow-hidden bg-tertiary mt-8'>
        <div className='flex flex-col'>
            <div className='flex justify-center text-[#022F5C]'>
                <h1 className='lg:text-3xl md:text-3xl sm:text-2xl text-xl font-bold py-4 mb-6 font4'>Top Job Oppurtunities</h1>
            </div>
         <div className="mb-16 align-start   grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 md:ml-auto md:mr-auto items-center justify-between lg:gap-20 md:gap-10 gap-6">
         <div className='flex flex-col gap-2 justify-start text-start'>
            <img src={ENG} alt='eng' className='w-10' />
            <h3 className="text-[#2E2E2E] lg:text-lg md:text-base sm:text-base text-sm">Software Engineer</h3>
            <p className="text-[#2E2E2E] md:text-sm text-xs lg:text-sm sm:text-sm">200 open positions</p>
         </div>
         <div className='flex flex-col gap-2 justify-start text-start'>
            <img src={PRO} alt='eng' className='w-10' />
            <h3 className="text-[#2E2E2E] lg:text-lg md:text-base sm:text-base text-sm">Product Manager</h3>
            <p className="text-[#2E2E2E] md:text-sm text-xs lg:text-sm sm:text-sm">200 open positions</p>
         </div>
         <div className='flex flex-col gap-2 justify-start text-start'>
            <img src={SCI} alt='eng' className='w-10' />
            <h3 className="text-[#2E2E2E] lg:text-lg md:text-base sm:text-base text-sm">Data Scientist</h3>
            <p className="text-[#2E2E2E] md:text-sm text-xs lg:text-sm sm:text-sm">200 open positions</p>
         </div>
         <div className='flex flex-col gap-2 justify-start text-start'>
            <img src={DES} alt='eng' className='w-10' />
            <h3 className="text-[#2E2E2E] lg:text-lg md:text-base sm:text-base text-sm">Product Design</h3>
            <p className="text-[#2E2E2E] md:text-sm text-xs lg:text-sm sm:text-sm">200 open positions</p>
         </div>
         <div className='flex flex-col gap-2 justify-start text-start'>
            <img src={MAR} alt='eng' className='w-10' />
            <h3 className="text-[#2E2E2E] lg:text-lg md:text-base sm:text-base text-sm">Marketing</h3>
            <p className="text-[#2E2E2E] md:text-sm text-xs lg:text-sm sm:text-sm">200 open positions</p>
         </div>
         </div>

         <div className="lg:flex md:flex hidden  align-start  flex-col md:flex-row md:ml-auto md:mr-auto items-center justify-between lg:gap-20 md:gap-10 gap-6">
         <div className='flex flex-col gap-2 justify-start text-start'>
            <img src={ENG} alt='eng' className='w-10' />
            <h3 className="text-[#2E2E2E] lg:text-lg md:text-base text-base">Software Engineer</h3>
            <p className="text-[#2E2E2E] text-sm">200 open positions</p>
         </div>
         <div className='flex flex-col gap-2 justify-start text-start'>
            <img src={PRO} alt='eng' className='w-10' />
            <h3 className="text-[#2E2E2E] lg:text-lg md:text-base text-base">Product Manager</h3>
            <p className="text-[#2E2E2E] text-sm">200 open positions</p>
         </div>
         <div className='flex flex-col gap-2 justify-start text-start'>
            <img src={SCI} alt='eng' className='w-10' />
            <h3 className="text-[#2E2E2E] lg:text-lg md:text-base text-base">Data Scientist</h3>
            <p className="text-[#2E2E2E] text-sm">200 open positions</p>
         </div>
         <div className='flex flex-col gap-2 justify-start text-start'>
            <img src={DES} alt='eng' className='w-10' />
            <h3 className="text-[#2E2E2E] lg:text-lg md:text-base text-base">Product Design</h3>
            <p className="text-[#2E2E2E] text-sm">200 open positions</p>
         </div>
         <div className='flex flex-col gap-2 justify-start text-start'>
            <img src={MAR} alt='eng' className='w-10' />
            <h3 className="text-[#2E2E2E] lg:text-lg md:text-base text-base">Marketing</h3>
            <p className="text-[#2E2E2E] text-sm">200 open positions</p>
         </div>
         </div>


         </div>
    </div>
  )
}

export default Frame;