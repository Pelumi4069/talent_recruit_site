import React from 'react';
import JOB from '../assets/job.png';
import CUS from '../assets/cus.png';
import APP from '../assets/app.png';
import CONN from '../assets/conn.png';
import Vector from '../assets/vec2.png';

 const How = () => {
  return (
    <div className='lg:h-[75vh] flex items-center lg:bg-cover lg:bg-center 
    lg:bg-no-repeat py-8 lg:px-24  md:px-12 font4 px-6  lg:py-0 overflow-hidden md:flex justify-between bg-tertiary'>
        <div className=' container mx-auto flex flex-col items-center justify-center'>
        <div className='py-10 bg-tertiary-50  rounded-xl text-center'>
    <h1 className='text-[#022F5C] font-bold lg:text-3xl  md:text-3xl  text-2xl mb-2 font4'>How it works</h1>
    <div className="flex items-center justify-center"> {/* Add this div */}
        <hr className='w-[8rem] bg-[#022F5C] py-[0.1rem] text-[#022F5C] bg-center items-center justify-center text-center' />
    </div>
    <p className='text-base text-[#2E2E2E] py-2 lg:w-[36rem] md:w-[36rem] my-2 font4'>Navigating the job market can often feel overwhelming, but at TalentRoute, we've simplified the process to make it as straightforward as possible. Here's a step-by-step guide on how our platform works:</p>
</div>

            <div className='  items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20'>
                <div className="flex flex-col text-start gap-2">
                    <img src={JOB} alt='img' className='w-12'  />
                    <h3 className="text-[#2E2E2E] font-bold">Explore Job Listings</h3>
                    <p className="text-[#545456] text-sm w-48">Begin your job search journey by exploring our extensive database of job listings</p>
                </div>

                <div className="flex flex-col text-start gap-2">
                    <img src={CUS} alt='img' className='w-12' />
                    <h3 className="text-[#2E2E2E] font-bold">Customize Search</h3>
                    <p className="text-[#545456] text-sm w-48">Tailor your job search to your preferences with our advanced customization options</p>
                </div>
                <div className="flex flex-col text-start gap-2">
                    <img src={APP} alt='img' className='w-12' />
                    <h3 className="text-[#2E2E2E] font-bold">Apply Effortlessly</h3>
                    <p className="text-[#545456] text-sm w-48">Once you've found the perfect job, Submit applications directly to our platform</p>
                </div>
                <div className="flex flex-col text-start gap-2">
                    <img src={CONN} alt='img' className='w-12' />
                    <h3 className="text-[#2E2E2E] font-bold">Connect with Employers</h3>
                    <p className="text-[#545456] text-sm w-48">Connect with top employers who are actively seeking candidates like you</p>
                </div>
              
            </div>
      <img src={Vector} alt="red" className="absolute  right-0 transform -translate-x-[8%] translate-y-[-50%] lg:w-[5%] md:w-[6%] w-[8%]" />

        </div>
        
    </div>
  )
}

export default How;
