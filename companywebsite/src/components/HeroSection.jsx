// components/Hero.js
import React from "react";
import { Transition } from "@headlessui/react";
import Services from "./Services";

const Hero = () => {
  return (
    <section className="bg-gray-100 text-gray-900">
      <div className="relative py-40">
        <div className="bg-image absolute inset-0"></div>
        <div className="bg-black bg-opacity-60 absolute inset-0"></div>
        <div className="relative max-w-6xl mx-auto flex flex-col items-center justify-center px-6 text-center z-10">
          <Transition
            show={true}
            appear={true}
            enter="transition-opacity duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-1000"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                Cost-Benefit Optimization
              </h1>
              <p className="text-2xl lg:text-4xl mb-6">
                with our software solutions
              </p>
            </div>
          </Transition>
          <Transition
            show={true}
            appear={true}
            enter="transition-transform duration-1000 ease-out"
            enterFrom="transform translate-y-10 opacity-0"
            enterTo="transform translate-y-0 opacity-100"
            leave="transition-transform duration-1000 ease-out"
            leaveFrom="transform translate-y-0 opacity-100"
            leaveTo="transform translate-y-10 opacity-0"
          >
            <div>
              <a
                href="#contact"
                className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </Transition>
        </div>
      </div>
      <div className="relative">
        <svg
          className="absolute left-0 right-0 bottom-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#f6d365"
            fillOpacity="1"
            d="M0,192L48,208C96,224,192,256,288,256C384,256,480,224,576,218.7C672,213,768,235,864,213.3C960,192,1056,128,1152,112C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <div className="bg-gradient-to-r from-yellow-300 via-red-300 to-pink-300 py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1 space-y-6">
                <h2 className="text-3xl font-bold">Our Services</h2>
                <p className="text-xl">
                  Innovative Software Solutions for Better Results
                </p>
                <p className="text-lg">
                  Empowering digital transformation of your business with our
                  software development services.
                </p>
              </div>
              <div className="lg:col-span-2">
                <Services />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
