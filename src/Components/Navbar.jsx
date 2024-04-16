import React from 'react';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import Logo from '../assets/logo.svg';
import { Outlet, Link } from "react-router-dom";

// import About from './About';

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Job listings', href: '/top', current: false },
  { name: 'About us', href: '/about', current: false },
  { name: 'Contact', href: '/contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function Navbar() {
  return (
    <div>
    <Disclosure as="nav" className="bg-primary fixed w-full lg:px-12 md:px-12 sm:px-1  px-1 z-20 top-0">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl  ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <AiOutlineClose className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <IoMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex  items-center ml-10 ">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="lg:h-8 md:h-[1.8rem]  sm:h-[1.8rem]  h-[1.4rem] w-auto"
                    src={Logo}
                    alt="logo"
                  />
                </div>
                <div className="lg:block hidden sm:ml-6">
                <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href} 
                        className={classNames(
                          item.current ? 'text-primary' : 'text-[#2E2E2E] hover:bg-gray-700 hover:text-white',
                          'rounded-md lg:px-5 md:px-2 py-2 text-sm font-medium font3'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static  sm:inset-auto sm:ml-6 sm:pr-0">
<div className=' lg:block md:block sm:block'>
<div className='flex flex-row md:flex-row justify-between lg:mt-4 mt-0 gap-2'>
<button className='inline-flex font5 bg-black-600 border-secondary border-[1px] lg:text-sm text-xs py-1 lg:px-5 md:px-3 sm:px-3 px-2 mt-2 md:mt-0 bg-white transform hover:scale-110 transition ease-out 300 text-secondary p-2 rounded'>
               Login
           </button>

           <button className='inline-flex font5 bg-black-600 lg:text-sm text-xs border-0 py-1 lg:px-5 md:px-3 sm:px-3 px-2 mt-2 md:mt-0 bg-secondary transform hover:scale-110 transition ease-out 300 text-white p-2 rounded'>
               Sign up
           </button>
           </div>
           </div>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a 
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden block">
          <div className="space-y-1 px-2 pb-6 pt-4">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link} // Use 'as' instead of 'href'
                  to={item.href} // Use 'to' instead of 'href'
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-[#2E2E2E] hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-3 text-base font-medium font3'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    <Outlet />
    </div>
  )
}


export default Navbar;