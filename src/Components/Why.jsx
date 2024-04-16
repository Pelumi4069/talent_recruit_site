import React from 'react';
import Map from '../assets/map.png';
import Check from '../assets/checked.png';



const Why = () => {
  return (
    <div className=" lg:h-[95vh] lg:p-24 md:p-12 p-6 w-full overflow-hidden bg-tertiary">
        <div className="mx-auto grid md:grid-cols-2 flex-row ">
            <div className=" flex flex-col text-start">
                <h1 className='text-[#022F5C] font-bold text-2xl mb-2 font4'>Why choose us? </h1>
                <hr className='w-[8rem] bg-[#022F5C] py-[0.1rem] text-[#022F5C]' />
                <div className='lg:hidden md:hidden block' >
                <img src={Map} alt="question" className='w-[400px] mx-auto my-4' />
            </div>
                <p className='lg:text-base md:text-base text-sm text-[#2E2E2E] py-2 my-2 font4'>At TalentRoute, we understand that finding the right job can be a daunting task. That's why we're committed to making your job search journey as seamless and rewarding as possible. Here's why thousands of job seekers trust us to help them find their dream careers</p>
                <div className='flex flex-row mb-2'>
                    <img src={Check} alt='check' className='mr-2 w-[7%]' />
                    <p className="text-[#2E2E2E] lg:text-base md:text-base text-sm font4">Extensive Job Listings</p>
                </div>
                <div className='flex flex-row mb-2'>
                    <img src={Check} alt='check' className='mr-2 w-[7%]' />
                    <p className="text-[#2E2E2E] lg:text-base md:text-base text-sm font4">Customer Search Experience</p>
                </div>
                <div className='flex flex-row mb-2'>
                    <img src={Check} alt='check' className='mr-2 w-[7%]' />
                    <p className="text-[#2E2E2E] lg:text-base md:text-base text-sm font4">User-Friendly Interface</p>
                </div>
                <div className='flex flex-row mb-4'>
                    <img src={Check} alt='check' className='mr-2 w-[7%]' />
                    <p className="text-[#2E2E2E] lg:text-base md:text-base text-sm font4">Expertise and Support</p>
                </div>
                <div className='mb-4'>
                <button className='bg-secondary font4 text-white text-sm lg:text-base py-2 px-4 rounded-md mb-2 lg:mb-0 lg:mr-7 cursor-pointer hover:bg-accent hover:text-primary transform hover:scale-110 transition ease-out 300'>
            Sign up
          </button>
          </div>
            </div>

            <div className='lg:block md:block hidden' >
                <img src={Map} alt="question" className='w-[400px] mx-auto my-4' />
            </div>
   

        </div>

    </div>
  )
}

export default Why;