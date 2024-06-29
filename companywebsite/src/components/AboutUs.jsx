// components/About.js
import React from 'react';
import { Transition } from '@headlessui/react';

const About = () => {
  return (
    <section id="about" className="bg-white text-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-xl">Empowering digital transformation of your business with our software development services.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
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
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Our Vision</h3>
              <p className="text-lg">To be the best strategic partner for our clients, leading with innovative technological solutions of excellence and providing the best business experience.</p>
              <h3 className="text-2xl font-semibold">Our Mission</h3>
              <p className="text-lg">We provide flexible, customized, value-added and short-term solutions for clients seeking to optimize their business by being a strategic ally in their digital transformation through the latest technologies.</p>
            </div>
          </Transition>
          <Transition
            show={true}
            appear={true}
            enter="transition-opacity duration-1000 delay-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-1000"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Our Values</h3>
              <p className="text-lg">We believe in innovation, excellence, and providing value to our clients. Our team is committed to driving digital transformation and ensuring our clients achieve their technological goals.</p>
              <h3 className="text-2xl font-semibold">Our Experience</h3>
              <p className="text-lg">With years of experience in the software development industry, we have successfully delivered numerous projects across various domains. Our expertise spans across business management software, IT consulting, custom software development, and mobile app development.</p>
            </div>
          </Transition>
        </div>
      </div>
    </section>
  );
};

export default About;
