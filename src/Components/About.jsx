import React from 'react'
import Mission from '../constants/aboutus/Mission';
import Get from "../constants/aboutus/About";
import Objective from '../constants/aboutus/Objective';

const About = () => {
  return (
    <div>
        <div className="mt-10"></div>
        <Get />
        <Mission />
        <Objective />
    </div>
  )
}

export default About;