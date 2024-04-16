import React from 'react';
import Image from '../assets/hero img.png';
import Play from '../assets/Ornament 62.jpg';
import Loc from '../assets/loc.png';
import Search from '../assets/Icons.png';
import Vector from '../assets/vec1.png';
import { motion } from 'framer-motion';




    const Home = () => {

      const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.8,
            staggerChildren: 0.4
          }
        }
      };
      
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };
      
      return (
        <motion.div
          id='home'
          className='lg:h-[105vh] flex  bg-tertiary items-center lg:bg-cover lg:bg-center lg:bg-no-repeat lg:py-24  md:py-12 py-6 lg:px-24  md:px-12 sm:px-8 px-4 overflow-hidden md:flex justify-between'
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <motion.div
            className='text-left  lg:pt-16 md:pt-6 pt-4  sm:pt-6 lg:pb-16 flex flex-col lg:flex-row   md:pb-12 pb-6'
            variants={item}
          >
            

    {/* <div id='home' className='lg:h-[105vh] flex flex-col lg:flex-row bg-tertiary items-center lg:bg-cover lg:bg-center lg:bg-no-repeat lg:py-24  md:py-12 py-8 lg:px-24  md:px-12 sm:px-8 px-4 overflow-hidden md:flex justify-between'> */}
      <div className='text-left flex flex-col pt-16 lg:pb-16  md:pb-12 pb-6'>
          <img src={Play} alt="play" className=' cursor-pointer lg:w-[5rem] md:w-[4rem] w-[3rem] lg:border-none transform hover:scale-90 transition ease-in 300'/>
        <h1 className='md:text-4xl font3 text-2xl lg:text-5xl lg:w-[40rem] md:w-[35rem]  py-4 font-bold text-[#2E2E2E] lg:text-start leading-tight'>
          Explore a World of Career Oppurtunities Accross Borders
        </h1>
        <h3 className='py-2 font4 md:text-base text-sm lg:text-lg text-[#2E2E2E] lg:w-[35rem] md:w-[30rem]  lg:text-start '>
        Embark on an Exciting Journey of Global Career Exploration: Uncover a Multitude of Opportunities Across Borders, Tailored Just for  Your Unique Skills and Aspirations
        </h3>
        <div className='py-3 flex md:flex-row flex-col lg:gap-6 md:gap-5 sm:gap-4 gap-2 lg:flex-row justify-start lg:justify-start items-start'>
            <div className='flex flex-row gap-2'>
                <img src={Search} alt='search' className='w-5 h-5' />
                <p className='text-[#2E2E2E] lg:text-base text-sm font4'>Job title, keywords, company</p>
            </div>
            <p className='lg:block md:block hidden'>|</p>
            <div className='flex flex-row gap-2'>
                <img src={Loc} alt='location' className='w-3 h-5 lg:block md:block hidden'  />
                <p className='text-[#2E2E2E] lg:text-base text-sm lg:block md:block hidden font4'>Location</p>
            </div>
            <div className='justify-center items-center'>
          <button className='bg-secondary font5 justify-center items-center text-white md:text-base lg:text-base text-sm md:py-2 py-1 lg:py-2 lg:px-8 md:px-7 px-4 rounded-md mb-2 lg:mb-0 lg:mr-7 cursor-pointer hover:bg-accent hover:text-primary transform hover:scale-110 transition ease-out 300'>
            Search
          </button>
          </div>
        </div>
      </div>

      <div className='mt-5 lg:mt-20 lg:ml-8'>
        <img src={Image} alt="hero_image" className='lg:w-[450px] md:w-[400px]  w-[400px] mt-5 lg:mt-0 lg:ml-8' />
      </div>
      {/* <img src={Vector} alt="red" className="absolute bottom-10 left-0 transform -translate-x-[20%] translate-y-[5%] lg:w-[5%] md:w-[6%] w-[8%]" /> */}
    {/* </div> */}
          </motion.div>
    
         
          <motion.img
            src={Vector}
            alt="red"
            className="absolute bottom-10 left-0 transform -translate-x-[20%] translate-y-[5%] lg:w-[5%] md:w-[6%] w-[8%]"
            initial="hidden"
            animate="visible"
            variants={item}
          />
        </motion.div>
      );
    }

export default Home;
