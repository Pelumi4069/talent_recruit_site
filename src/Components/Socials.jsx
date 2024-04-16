import React from 'react';
import Zapier from "../assets/zapier.png"
import Spotify from "../assets/spotify.png";
import Zoom from "../assets/zoom.png";
import Netflix from "../assets/netflix.png";
import Amazon from "../assets/amazon.png";
import Adobe from "../assets/adobe.png";



const Socials = () => {
  return (
    <div className='lg:h-[25vh] flex items-center justify-center lg:bg-cover lg:bg-center 
    lg:bg-no-repeat lg:p-24  md:p-12 p-6 lg:py-0 overflow-hidden bg-tertiary'>
        <div className='flex flex-col'>
            <div className='flex justify-center text-[#2E2E2E]'>
                <h1 className='lg:text-3xl md:text-3xl text-2xl font-bold py-2 lg:mb-8 md:mb-8 mb-4 font5'>Companies that are partnered with us</h1>
            </div>
         <div className="flex align-start flex-col md:flex-row md:ml-auto md:mr-auto items-center justify-between lg:gap-4  md:gap-4  gap-2">
         <img src={Zapier} alt="spotify" className='p-5' />
         <img src={Spotify} alt="slack" className='p-5' />
         <img src={Zoom} alt="netflix" className='p-5' />
         <img src={Amazon} alt="heroku" className='p-5' />
         <img src={Adobe} alt="vimeo" className='p-5' />
         <img src={Netflix} alt="airbnb" className='p-5' />
         </div>
         </div>
    </div>
  )
}

export default Socials;