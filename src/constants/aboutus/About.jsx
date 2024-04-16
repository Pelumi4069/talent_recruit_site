import React from 'react';
import Hero1 from '../../assets/hero1.png';
import Hero2 from '../../assets/hero2.png';
import Hero3 from '../../assets/hero3.png';
import Hero4 from '../../assets/hero4.png';



const Get = () => {
  return (
    <div className='lg:h-[100vh] flex items-center justify-center lg:bg-cover lg:bg-center 
    lg:bg-no-repeat lg:p-20  md:p-12 p-6 lg:py-0 overflow-hidden bg-tertiary '>
        <div className='flex flex-col'>
            <div className='flex flex-col justify-center text-center items-center text-[#2E2E2E]'>
                <h1 className='lg:text-3xl md:text-3xl text-2xl font-bold py-2 lg:mb-8 md:mb-8 mb-4 font5'>Get aquainted with TalentRoute</h1>
                <p className="text-base lg:px-40 md:px-30 mb-4"> TalentRoute, your trusted ally in the world of job searching. We understand the challenges that come with finding the right career path, which is why we're dedicated to simplifying the process for you. With our innovative platform and expert guidance, we're here to make your job search journey as smooth as possible</p>
            </div>
         <div className="flex align-center flex-col md:flex-row md:ml-auto  md:mr-auto items-center justify-between lg:gap-4  md:gap-4 gap-2">
         {/* md:flex-row md:ml-auto */}
         <img src={Hero1} alt="hero1" className='p-2 w-[12rem]' />
         <img src={Hero2} alt="hero2" className='p-3 w-[12rem]' />
         <img src={Hero3} alt="hero3" className='p-3 w-[12rem]' />
         <img src={Hero4} alt="hero4" className='p-2 w-[12rem]' />
         </div>
         </div>
    </div>
  )
}

export default Get;