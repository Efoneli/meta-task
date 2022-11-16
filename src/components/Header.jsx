import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import logo1 from '../assets/logo1.png';
import MyModal from './MyModal';


function Nav() {
  const [showMyModal, setShowMyModal] = useState(false);
  const handleOnClose = () => setShowMyModal(false);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white p-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex justify-between items-center">
              <div className="flex-shrink-0">
                <img
                src={logo1} alt='logo' 
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 justify-between">
                  <div className="ml-16">
                  <Link to=''
                    className="text-gray-500 hover:bg-gray-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>

                  <Link to='/placetostay'
                    className="text-gray-500 hover:bg-gray-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Place to stay
                  </Link>

                  <Link to=''
                    className="text-gray-500 hover:bg-gray-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    NFTs
                  </Link>

                  <Link to=''
                    className="text-gray-500 hover:bg-gray-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Community
                  </Link>
                  </div>
                  <div>
                    <button
                    onClick={() => setShowMyModal(true)}  className='bg-[#A02279] hover:bg-gray-400 text-white rounded-lg p-2 ml-96'>Connect wallet
                  </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-300 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-300 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <div>
                <Link to=''
                  className="hover:bg-gray-300 text-gray-500 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>

                <Link to=''
                  className="text-gray-300 hover:bg-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Place to stay
                </Link>

                <Link to=''
                  className="text-gray-300 hover:bg-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  NFTs
                </Link>

                <Link to=''
                  className="text-gray-300 hover:bg-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Community
                </Link>

                <Link to=''
                  className="text-gray-300 hover:bg-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>
                </div>
                <div>
                <button
                onClick={() => setShowMyModal(true)}  className='bg-[#A02279] hover:bg-gray-400  text-white rounded-lg p-2'>Connect wallet
                </button>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
      <MyModal onClose={handleOnClose} visible={showMyModal} />

    </div>
  );
}

export default Nav;