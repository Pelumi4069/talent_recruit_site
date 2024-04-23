import React from 'react';
import Vector from '../../assets/vec2.png';
import JOHN from '../../assets/john.png';
import KYLE from '../../assets/kyle.png';
import JOSE from '../../assets/jose.png';
import { motion } from 'framer-motion'; 

const Meet = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.7 }} 
      className='lg:h-[100vh] flex items-center justify-center lg:bg-cover lg:bg-center 
      lg:bg-no-repeat lg:p-20  md:p-12 p-6 lg:py-0 overflow-hidden bg-tertiary '
    >
        <div className=' container mx-auto flex flex-col items-center justify-center'>
        <div className='py-10 bg-tertiary-50  rounded-xl text-center'>
    <h1 className='text-[#022F5C] font-bold lg:text-3xl  md:text-3xl  text-2xl mb-2 font4'>Meet The Team</h1>
    <div className="flex items-center justify-center"> 
        <hr className='w-[8rem] bg-[#022F5C] py-[0.1rem] text-[#022F5C] bg-center items-center justify-center text-center' />
    </div>
    <p className='text-base text-[#2E2E2E] py-2 lg:w-[36rem] md:w-[36rem] my-2 font4'>Behind TalentRoute's dedication to your career success stands a team of passionate individuals committed to supporting you on your journey. Get to know the faces behind the platform, each bringing unique expertise and enthusiasm to empower you in your professional endeavors</p>
</div>
            <div className='  items-center flex flex-col lg:flex-row md:flex-row gap-8'>
                <div className="flex flex-col text-center justify-center gap-2">
                    <img src={JOHN} alt='img' className='w-60'  />
                    <h3 className="text-[#2E2E2E] font-bold">John Stones</h3>
                    <p className="text-[#545456] text-sm ">CEO/Founder</p>
                </div>

                <div className="flex flex-col text-center gap-2">
                    <img src={KYLE} alt='img' className='w-60' />
                    <h3 className="text-[#2E2E2E] font-bold">Kyle Walker</h3>
                    <p className="text-[#545456] text-sm ">CTO</p>
                </div>
                <div className="flex flex-col text-center gap-2">
                    <img src={JOSE} alt='img' className='w-60' />
                    <h3 className="text-[#2E2E2E] font-bold">Josephine Kurt</h3>
                    <p className="text-[#545456] text-sm ">Head of operations</p>
                </div>
              
            </div>
      <img src={Vector} alt="red" className="absolute  right-0 transform -translate-x-[1%] translate-y-[-50%] lg:w-[5%] md:w-[6%] w-[8%]" />

        </div>
        
        </motion.div>
  )
}

export default Meet