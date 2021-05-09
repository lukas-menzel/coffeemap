import React, { useState } from "react";
import H1 from "./h1"
import {
    BrowserRouter as
    Link,
    NavLink
  } from "react-router-dom";
  import {useAuth, logout} from "../auth"

import { Transition } from "@headlessui/react";



function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [logged] = useAuth();


  return (
    <div>
      <nav className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
              <Link exact to="/"><H1 h1="Coffemap.berlin" /></Link>

              </div>
              <div className="hidden md:block">
                <div className="ml-10 self-center flex justify-end items-baseline space-x-4">
                    <nav>
                        <ul>
                        <li className="px-3 float-left whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                            <NavLink className="block" to="/">Home</NavLink>
                        </li>
                        <li className="px-3 float-left whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                            <NavLink className="block" to="/places">Places</NavLink>
                        </li>
                        {!logged? <span></span>: 
                        <li className="px-3 float-left whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                            <NavLink className="block" to="/create-place">Create Place</NavLink>
                        </li>}
                        {!logged? <li className="px-3 float-left whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                            <NavLink className="block" to="/register">Register</NavLink> 
                        </li>: <span></span>}
                        {!logged?<li className="px-3 float-left whitespace-nowrap text-base font-bold text-green-400 hover:text-green-500">
                            <NavLink className="block text-green-400" to="/login">Login</NavLink> 
                        </li>: <li className="px-1 float-left whitespace-nowrap text-base font-bold text-green-400 hover:text-green-500"><NavLink to="" onClick={() => logout()}>Logout</NavLink></li>}
                        </ul>
                    </nav>
                   
                </div>
              </div>
            
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className=" inline-flex items-center justify-center p-2 text-black hover:text-white  focus:outline-none "
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="black"
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
                    stroke="black"
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
              <nav>
                        <ul>
                        <li className="px-3 py-2 whitespace-nowrap text-base text-xl text-gray-500 hover:text-gray-900">
                            <NavLink className="block" to="/">Home</NavLink>
                        </li>
                        <li className="px-3 py-2 whitespace-nowrap text-xl text-base font-medium text-gray-500 hover:text-gray-900">
                            <NavLink className="block" to="/places">Places</NavLink>
                        </li>
                        {!logged? <span></span>: 
                        <li className="px-3 py-2 whitespace-nowrap text-xl text-base font-medium text-gray-500 hover:text-gray-900">
                            <NavLink className="block" to="/create-place">Create Place</NavLink>
                        </li>}
                        {!logged? <li className="px-3 py-2 text-xl whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                            <NavLink className="block" to="/register">Register</NavLink> 
                        </li>: <span></span>}
                        {!logged?<li className="px-3 py-2 whitespace-nowrap text-xl text-base font-bold text-green-400 hover:text-green-500">
                            <NavLink className="block text-green-400" to="/login">Login</NavLink> 
                        </li>: <li className="px-1 py-2 whitespace-nowrap text-xl text-base font-bold text-green-400 hover:text-green-500"><NavLink to="" onClick={() => logout()}>Logout</NavLink></li>}
                        </ul>
                    </nav>

                
              </div>
            </div>
          )}
        </Transition>
      </nav>

    </div>
  );
}

export default Nav;
