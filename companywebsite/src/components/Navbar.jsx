"use client";
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { Link } from 'react-scroll';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white text-black shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-6">
        <div className="flex items-center">
          <div className="text-2xl font-bold">Befive Technologies</div>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="services" smooth={true} duration={500} className="hover:text-gray-200 font-bold transition-colors duration-200 cursor-pointer text-green-800">Our Services</Link>
          <Link to="about" smooth={true} duration={500} className="hover:text-gray-200 font-bold transition-colors duration-200 cursor-pointer text-green-800">About Us</Link>
          <Link to="experience" smooth={true} duration={500} className="hover:text-gray-200 font-bold transition-colors duration-200 cursor-pointer text-green-800">Experience</Link>
          <Link to="technologies" smooth={true} duration={500} className="hover:text-gray-200 font-bold transition-colors duration-200 cursor-pointer text-green-800">Technologies</Link>
          <Link to="contact" smooth={true} duration={500} className="hover:text-gray-200 font-bold transition-colors duration-200 cursor-pointer text-green-800">Contact Us</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      <Transition
        show={isMobileMenuOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
        as="div"
        className="fixed inset-0 z-50 flex"
      >
        <div className="fixed inset-0 bg-black opacity-50" onClick={toggleMobileMenu}></div>
        <div className="relative bg-green-600 w-64 space-y-6 py-7 px-2">
          <Link to="services" smooth={true} duration={500} className="block px-4 py-2 text-white hover:bg-green-700 transition-colors duration-200 cursor-pointer" onClick={toggleMobileMenu}>Our Services</Link>
          <Link to="about" smooth={true} duration={500} className="block px-4 py-2 text-white hover:bg-green-700 transition-colors duration-200 cursor-pointer" onClick={toggleMobileMenu}>About Us</Link>
          <Link to="experience" smooth={true} duration={500} className="block px-4 py-2 text-white hover:bg-green-700 transition-colors duration-200 cursor-pointer" onClick={toggleMobileMenu}>Experience</Link>
          <Link to="technologies" smooth={true} duration={500} className="block px-4 py-2 text-white hover:bg-green-700 transition-colors duration-200 cursor-pointer" onClick={toggleMobileMenu}>Technologies</Link>
          <Link to="contact" smooth={true} duration={500} className="block px-4 py-2 text-white hover:bg-green-700 transition-colors duration-200 cursor-pointer" onClick={toggleMobileMenu}>Contact Us</Link>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
