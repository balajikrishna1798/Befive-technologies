import React from "react";
import { Transition } from "@headlessui/react";
import Services from "./Services";

const Hero = () => {
  return (
    <section className="bg-gray-100 text-gray-900">
      <div className="relative py-40">
        <div className="bg-image absolute inset-0"></div>
        <div className="bg-blue-800 bg-opacity-50 absolute inset-0"></div>
        <div className="relative max-w-6xl container mx-auto flex flex-col items-center justify-center px-6 text-center">
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
            <div className="text-white z-10">
              <h1 className="text-6xl font-bold mb-4">
                Cost-Benefit Optimization
              </h1>
              <p className="text-4xl mb-6">with our software solutions</p>
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
            <div className="z-10">
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
      <div className="bg-yellow-300 ">
        <div className="max-w-6xl mx-auto px-6 py-12">
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
    </section>
  );
};

export default Hero;
