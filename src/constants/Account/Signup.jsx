import React from 'react';
import SignUp from '../../assets/signup.jpg';
import { Link } from "react-router-dom";



const Signup = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-10 font4">
    
      <div className="lg:w-1/2 hidden lg:block">
        <img src={SignUp} alt="signupimage" className="object-cover w-full h-full" />
      </div>
      

      <div className="bg-primary p-8 flex flex-col justify-center items-center lg:w-1/2">
        <h1 className="text-2xl font-bold mb-6 text-[#022F5C]">Sign up</h1>

        <form id="contact-form" method="POST" className="w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              placeholder="Enter your first name..."
              type="text"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              placeholder="Enter your last name..."
              type="text"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              id="email"
              name="email"
              placeholder="Enter email..."
              type="email"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
              Phone Number
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter phone number..."
              type="tel"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              id="password"
              name="password"
              placeholder="Enter password..."
              type="password"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <Link to="/login">
          <button
            type="submit"
            className="bg-secondary transform hover:scale-90 transition ease-in 300 my-4 text-white py-2 px-4 rounded-md hover:bg-primaryDark  duration-300"
          >
            Create Account
          </button>
          </Link>
          <div className="mt-2 text-sm text-start justify-start">
            <span>Already have an account? </span>
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </div>
        </form>
       
      </div>
    </div>
  );
}

export default Signup;
