import React, { useState } from 'react';
import Image from '../assets/client.png';
import Play from '../assets/stars.png';
import Left from '../assets/left.png';
import Right from '../assets/right.png';
import { motion } from 'framer-motion';

const Client = () => {
  const [textIndex, setTextIndex] = useState(0);

  const testimonials = [
    {
      quote: "I am amazed by the opportunities Talent Route brought my way! Within days of signing up, I received job matches that perfectly aligned with my skills and career goals. The platform's personalized approach and seamless user experience made my job search effortless. Thanks to Talent Route, I found my dream tech job!",
      author: "John Stones",
      position: "Software Engineer"
    },
    {
      quote: "The support I received from Talent Route was outstanding! Their team provided valuable insights and guidance throughout my job search journey. With their help, I secured multiple interviews and eventually landed a job at a top-tier company. I highly recommend Talent Route ",
      author: "Emma Watson",
      position: "UX Designer"
    },
    {
        quote: "I am amazed by the opportunities Talent Route brought my way! Within days of signing up, I received job matches, TalentRoute premier tech hiring platform in India. Connect, engage, and swiftly fill positions with top talent to execute your vision more efficiently. . Thanks to Talent Route, I found my dream tech job!",
        author: "Arjun Sharma",
        position: "Fullstack developer"

    }
  ];

  const handleNext = () => {
    setTextIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setTextIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div
      id='home'
      className='lg:h-[95vh] font4 flex bg-tertiary items-center lg:bg-cover lg:bg-center lg:bg-no-repeat lg:py-24 md:py-12 py-8 lg:px-24 md:px-12 sm:px-8 px-4 overflow-hidden flex-col'
      initial="hidden"
      animate="visible"
    >
      <h1 className='text-2xl text-secondary font-bold'>What our client says</h1>
      <motion.div className='gap-8 lg:pb-16 flex flex-col lg:flex-row md:pb-12 pb-6'>
        <div className='mt-5 lg:mt-10'>
          <img src={Image} alt="hero_image" className='w-[400px] mt-5 lg:mt-0' />
        </div>
        <div className='text-start flex flex-col lg:pt-20 lg:pb-16 md:pb-12 pb-6 justify-center'>
          <img src={Play} alt="play" className='cursor-pointer lg:w-[5rem] md:w-[4rem] w-[3rem] lg:border-none transform hover:scale-90 transition ease-in 300'/>
          <h3 className='py-2 md:text-base text-sm lg:text-base text-[#2E2E2E] lg:w-[35rem] md:w-[30rem] lg:text-start'>
            {testimonials[textIndex].quote}
          </h3>
          <h2 className="text-base font-bold">{testimonials[textIndex].author}</h2>
          <p className="text-sm">{testimonials[textIndex].position}</p>
          <div className='py-3 flex  lg:gap-6 md:gap-5 sm:gap-4 gap-2 flex-row justify-start lg:justify-start items-start'>
            <img src={Left} alt="left" onClick={handlePrev} />
            <img src={Right} alt="right" onClick={handleNext} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Client;

