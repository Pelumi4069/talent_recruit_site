import React from 'react';
import Loginn from '../../assets/login.jpg';
import { Link } from "react-router-dom";





const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row  font4 py-4 bg-primary">
        <div className="lg:w-1/2 hidden lg:block">
            <img src={Loginn} alt="signupimage" className="object-cover w-full h-full" />
        </div>


      <div className="rightSide bg-primary p-8 flex flex-col justify-center items-center lg:w-1/2 my-20">
        <h1 className="text-2xl font-bold mb-6 text-[#022F5C]">Welcome back!</h1>

        <form id="contact-form" method="POST" className="w-full max-w-md">
      
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              name="email"
              placeholder="Enter email..."
              type="email"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-6">
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
          <Link to="/login" >
          <button
            type="submit"
            className="bg-secondary transform hover:scale-90 transition ease-in 300 my-4 text-white py-2 px-4 rounded-md hover:bg-primaryDark  duration-300"
          >
            Log in
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
